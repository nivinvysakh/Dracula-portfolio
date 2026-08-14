import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, ref, set, remove, get } from "firebase/database";
import { SITE_CONFIG } from "../config";

const firebaseConfig = SITE_CONFIG.firebaseConfig;

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app, firebaseConfig.databaseURL);

const MAX_HISTORY_SIZE = 10;

export interface SpotifyTrackData {
  song: string;
  artist: string;
  album?: string;
  albumArtUrl?: string;
  trackId?: string;
  updatedAt?: string;
}

// Sanitize key string for Firebase Realtime Database paths (removes: . # $ [ ] /)
function sanitizeFirebaseKey(str: string): string {
  return str.replace(/[.#$\[\]/]/g, "_");
}

/**
 * Stores live Spotify playback into Firebase Realtime Database.
 * - Updates `spotify/current` live node.
 * - Adds song to `spotify/history/[SongName]` if not already recorded.
 * - Automatically evicts the oldest history entry when count > 10.
 */
export async function saveLiveSpotifyTrack(track: SpotifyTrackData): Promise<void> {
  if (!track.song) return;

  try {
    const currentTrackRef = ref(db, "spotify/current");
    const payload = {
      song: track.song,
      artist: track.artist,
      album: track.album || "",
      albumArtUrl: track.albumArtUrl || "",
      trackId: track.trackId || "",
      updatedAt: new Date().toISOString(),
    };

    // Update live playing status
    await set(currentTrackRef, payload);

    // Save to song-keyed history if not already present
    const songKey = sanitizeFirebaseKey(track.song);
    const trackHistoryRef = ref(db, `spotify/history/${songKey}`);
    const snapshot = await get(trackHistoryRef);

    if (!snapshot.exists()) {
      await set(trackHistoryRef, payload);

      // FIFO eviction check if history exceeds MAX_HISTORY_SIZE
      const historySnapshot = await get(ref(db, "spotify/history"));
      if (historySnapshot.exists()) {
        const historyData = historySnapshot.val();
        const keys = Object.keys(historyData);
        if (keys.length > MAX_HISTORY_SIZE) {
          let oldestKey: string | null = null;
          let minTime = Infinity;

          for (const k of keys) {
            const item = historyData[k];
            const time = item?.updatedAt ? new Date(item.updatedAt).getTime() : 0;
            if (time && time < minTime) {
              minTime = time;
              oldestKey = k;
            }
          }

          if (oldestKey) {
            await remove(ref(db, `spotify/history/${oldestKey}`));
          }
        }
      }
    }
  } catch (error) {
    console.warn("⚠️ [Firebase] Unable to log Spotify track:", error);
  }
}

/**
 * Removes `spotify/current` node when music is paused or stopped.
 */
export async function clearLiveSpotifyTrack(): Promise<void> {
  try {
    await remove(ref(db, "spotify/current"));
  } catch (error) {
    console.warn("⚠️ [Firebase] Unable to clear live track node:", error);
  }
}

/**
 * Retrieves the most recent track recorded in `spotify/history`.
 */
export async function getLastPlayedTrackFromFirebase(): Promise<SpotifyTrackData | null> {
  try {
    const snapshot = await get(ref(db, "spotify/history"));

    if (snapshot.exists()) {
      const data = snapshot.val();
      let latestTrack: SpotifyTrackData | null = null;
      let maxTime = 0;

      for (const key of Object.keys(data)) {
        const item = data[key];
        const time = item?.updatedAt ? new Date(item.updatedAt).getTime() : 0;
        if (time && time > maxTime) {
          maxTime = time;
          latestTrack = {
            song: item.song,
            artist: item.artist,
            album: item.album,
            albumArtUrl: item.albumArtUrl,
            trackId: item.trackId,
            updatedAt: item.updatedAt,
          };
        }
      }
      return latestTrack;
    }
  } catch (error) {
    console.warn("⚠️ [Firebase] Unable to fetch last played track from Firebase:", error);
  }
  return null;
}
