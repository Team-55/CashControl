FROM node:20-alpine

WORKDIR /app/frontend/

COPY frontend/. /app/frontend/
RUN npm install --force

COPY . /app/frontend/

CMD ["npm", "start"]
