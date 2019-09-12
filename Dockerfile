# Image Docker will use
FROM node:10.16.3-alpine as react-build

# set working dir
WORKDIR /app

#add `app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app depenencies
COPY package.json /app/package.json

RUN npm install

RUN npm install react-scripts@3.0.1 -g

CMD ["npm", "start"]