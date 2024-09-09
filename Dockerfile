FROM node:latest
WORKDIR /usr/blah-blah-blah
COPY . .
RUN yarn install
ENV NEW_RELIC_LICENSE_KEY=<LICENSE_KEY>
ENV NODE_ENV=staging
ENTRYPOINT [ "node", "server.js" ]


