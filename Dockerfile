FROM node:16-alpine as build
LABEL dev="Mathieu Daniere"
WORKDIR /home/app
COPY ./package*.json ./
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","run","build"]

FROM nginx:latest as prod
COPY --from=build /home/app/dist /usr/share/nginx/html/
RUN chown -R www-data:www-data /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html/
