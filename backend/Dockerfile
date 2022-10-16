FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

USER node

EXPOSE 3000

CMD ["node", "dist/app/index.js"]
