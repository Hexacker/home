FROM node:14

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn run build

EXPOSE 8080

CMD [ "yarn", "serve" ]