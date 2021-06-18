FROM node:12.2.0-alpine

WORKDIR /app

ENV PORT=80

ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 80

CMD ["yarn", "run", "serve"]

COPY package.json .
COPY yarn.lock .

RUN yarn install --no-optional --verbose

VOLUME /app/logs
VOLUME /app/node_modules

COPY . /app
