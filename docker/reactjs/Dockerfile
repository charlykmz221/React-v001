FROM node:15.5.1-alpine3.10
LABEL maintainer="Charly Moa"
WORKDIR /app
RUN apk update && apk add yarn git
RUN yarn install
#CMD ["yarn", "start"]
EXPOSE 3000