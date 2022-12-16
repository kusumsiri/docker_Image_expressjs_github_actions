# syntax=docker/dockerfile:1
FROM node:current-alpine

# app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install -g nodemon

RUN npm install

# Bundle app source
COPY app /app

EXPOSE 3000
CMD [ "nodemon", "app.js" ]
#CMD ["npm","start"]
