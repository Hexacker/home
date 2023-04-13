# build environment
FROM node:14 as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN yarn
RUN yarn add react-scripts@1.1.1 -g --silent
COPY . /usr/src/app
RUN yarn run build


# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /usr/src/app/build /usr/www/hexacker.com
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]