FROM node:10.16.3-alpine as react-build

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]