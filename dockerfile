FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine AS runner

# Copy custom NGINX configuration for 404 routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static build files from Astro build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]