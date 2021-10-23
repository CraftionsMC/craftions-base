FROM node:16
EXPOSE 3000
WORKDIR /craftions-base
COPY . /craftions-base
RUN yarn
RUN yarn webpack:build-prod
ENTRYPOINT yarn express:only-start