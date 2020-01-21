FROM node:12 AS build

WORKDIR /app

COPY . /app

RUN yarn install
