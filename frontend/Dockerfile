FROM node:16-alpine as build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine

EXPOSE  80

COPY --from=build /app/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]