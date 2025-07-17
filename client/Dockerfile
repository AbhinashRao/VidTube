FROM node:18-alpine

WORKDIR /client

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --frozen-lockfile --dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
