
FROM node:18 as build-stage

WORKDIR /app

COPY .env.production .env.production

COPY package*.json ./
RUN npm install

COPY . .


RUN npm run build


FROM nginx:stable-alpine

RUN rm -rf /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
