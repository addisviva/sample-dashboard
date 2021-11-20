FROM  node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT = 9200

EXPOSE 9200

CMD ["npm", "start"]