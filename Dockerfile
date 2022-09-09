FROM node:16.13-alpine

RUN npm install -g typescript ts-node

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --silent && mv node_modules ../

COPY . .

EXPOSE 4000

CMD npm start
