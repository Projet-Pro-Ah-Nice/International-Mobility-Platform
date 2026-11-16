FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY prisma/ ./prisma
COPY prisma.config.ts ./
COPY src/ ./src
COPY nest-cli.json ./
COPY tsconfig*.json ./

RUN DATABASE_URL="postgresql://x:x@localhost:5432/x" npx prisma generate
RUN npm run build


FROM node:22-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

USER node
EXPOSE 3000
CMD ["node", "dist/main.js"]