FROM node:17
WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend/ ./
EXPOSE 3000
CMD [ "npm","run","start" ]