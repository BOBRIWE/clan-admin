FROM node:12 AS build

WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn build


FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

