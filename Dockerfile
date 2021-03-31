FROM node:10
WORKDIR /candorism-backend
COPY package.json /candorism-backend
RUN npm install
COPY . /APP
CMD node index.js
EXPOSE 3030