FROM node:16-alpine
LABEL dev="Mathieu Daniere"
WORKDIR /home/app
COPY ./package*.json ./
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","run","dev"]

#FROM node:lts-alpine as prod
#WORKDIR /home/app
#RUN ls
#CMD ["npm","run","dev"]
