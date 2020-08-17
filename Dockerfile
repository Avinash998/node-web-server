FROM ubuntu

RUN cat /etc/*release*
RUN df -h
RUN apt-get update
RUN apt-get install -y nodejs 
RUN apt-get install -y npm
RUN node --version
RUN npm --version

WORKDIR /usr/src/app/node-web-server
COPY . .
ENTRYPOINT npm start
# To start docker image use following commands
# sudo docker run -p 3000:3000 image_name
