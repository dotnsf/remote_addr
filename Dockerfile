# https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/

# base image
FROM node:10

# working directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
EXPOSE 8443
CMD ["node", "app.js"]



