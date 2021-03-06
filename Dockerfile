FROM node:carbon

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

ARG NODE_ENV=production

ENV NODE_ENV=$NODE_ENV

ADD . /app

WORKDIR /app

COPY package.json yarn.lock ./

RUN mkdir -p /app/keys/

COPY ./app/keys/firebase/firebaseServiceAccountKey.json /app/keys/firebase/firebaseServiceAccountKey.json

ENTRYPOINT ["sh", "./entrypoint.sh"]

CMD [ "yarn", "start" ]
