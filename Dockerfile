FROM node:16 as build


WORKDIR /home/node/david-discord

COPY package*.json ./

RUN npm install
COPY ./ ./

RUN npm ci --only-production

EXPOSE 5000

CMD [ "node", "server.js" ]