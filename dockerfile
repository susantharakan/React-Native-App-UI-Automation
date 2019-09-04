FROM node:latest

LABEL maintainer="jason.legako@yum.com"

RUN ["mkdir", "-p", "/app"]
COPY . /app
WORKDIR /app
RUN ["chmod", "-R", "777", "/app/" ]
RUN npm install
CMD /app/LocalTunnel.sh