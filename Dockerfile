FROM node:lts-alpine as build
LABEL dev="Mathieu Daniere"
WORKDIR /home/app
COPY package*.json .
COPY . .
RUN npm install


FROM node:lts-alpine as prod
WORKDIR /home/app
CMD ["npm","run","dev"]
