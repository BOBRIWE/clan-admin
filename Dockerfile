FROM node:12

USER ${CURRENT_UID}

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . /app

