FROM node:lts-buster
RUN https://github.com/Pkdriller/NEXUS-AI/root/mrtohid
WORKDIR /root/mrtohid
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
