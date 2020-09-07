FROM node:current-slim

WORKDIR ~/YAPP-Helper

COPY . .

RUN npm install

EXPOSE 9170

CMD [ "npm", "start" ]
