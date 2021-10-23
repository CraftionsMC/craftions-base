FROM node:16
EXPOSE 3000
WORKDIR /craftions-app
COPY . /craftions-app
RUN yarn
RUN yarn webpack:build-prod
ENTRYPOINT yarn express:only-start