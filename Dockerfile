FROM node:12 AS build

WORKDIR /app

COPY . /app

RUN npm ci
RUN npm build


FROM nginx

COPY --from=build /app /app
