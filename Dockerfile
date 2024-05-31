FROM dockerhub.timeweb.cloud/library/node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn

EXPOSE 5137 

CMD ["yarn", "dev", "--host", "0.0.0.0"]