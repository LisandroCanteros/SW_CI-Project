FROM node:18.16-alpine

COPY package*.json /app/
COPY src /app/

WORKDIR /app

RUN npm install
RUN npm test

CMD ["node", "server.js", "--verbose"]

