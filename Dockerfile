FROM node:20-alpine as build-stage

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn

EXPOSE 5137

CMD ["yarn", "dev", "--host", "0.0.0.0"]