FROM node:20-slim

WORKDIR /app
EXPOSE 8080
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

CMD [ "node", "server.js"]