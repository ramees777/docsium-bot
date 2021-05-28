FROM node:14.17.0

ADD package.json /package.json
RUN npm install


ADD index.js /index.js

CMD [ "node","/index.js" ]