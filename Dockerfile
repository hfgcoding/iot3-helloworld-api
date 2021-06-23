FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Network / reverse proxy config
LABEL traefik.http.routers.helloapi.rule="Host(`helloapi.ds.ava.hfg.design`)"

EXPOSE 3000
CMD [ "node", "index.js" ]