FROM node:17-alpine AS builder
WORKDIR /app
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend/ ./
RUN npm run build

FROM node:17-alpine AS server
WORKDIR /app
COPY ./backend/package*.json ./
RUN npm install --production
RUN npm install pm2 -g
COPY --from=builder ./app/dist ./build
CMD ["pm2-runtime", "./build/main.js"]