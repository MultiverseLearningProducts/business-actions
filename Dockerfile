FROM node

ENV NODE_ENV=production

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "node", "server.js" ]
