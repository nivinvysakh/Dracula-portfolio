/// <reference path="../.astro/types.d.ts" />

interface Window {
  particlesInit?: (engine: import("@tsparticles/engine").Engine) => Promise<void>;
}