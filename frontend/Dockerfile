# --- Stage 1: build the static files with Node ---
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# --- Stage 2: serve them with nginx, as a non-root user ---
# nginx-unprivileged runs as the "nginx" user (uid 101) and listens on 8080,
# since non-root processes cannot bind ports below 1024.
FROM nginxinc/nginx-unprivileged:alpine AS runner

# Files in /etc/nginx/templates are processed with envsubst at startup:
# ${BACKEND_HOST} and ${BACKEND_PORT} are replaced by the container's env vars.
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=builder /app/dist /usr/share/nginx/html

USER nginx
EXPOSE 8080
