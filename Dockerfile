FROM node:18

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .

EXPOSE 5000

CMD ["node","app.js"]