FROM node:17-alpine AS builder
WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install --production
COPY ./frontend/ ./
RUN npm run build

# production environment
FROM nginx:1.19.10-alpine AS server
COPY --from=builder /app/build /usr/share/nginx/html

COPY --from=builder /app/config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
