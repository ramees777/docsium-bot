FROM node:14.17.0

ADD package.json /package.json
RUN npm install

ADD lib/provider.theme.js /lib/provider.theme.js
ADD lib/template.svg /lib/template.svg

ADD index.js /index.js

CMD [ "node","/index.js" ]