FROM node:12

WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn build

