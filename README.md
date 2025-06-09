# Shift Scheduler Frontend (Vue 3 Composition API)

## Overview

This project is a Shift Scheduler application frontend built using Vue 3 with the Composition API. It allows users to create, update, and view shifts with accurate time handling across different timezones. The app integrates with a backend API that stores shift data in UTC format and dynamically converts shift times based on the user’s selected timezone.

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

Start by cloning the project:

```bash
git clone https://github.com/alonzojoe/shift-scheduler-frontend.git
cd shift-scheduler-frontend
```

### Install Dependencies

Run the following to install required packages:

```bash
npm install
```

### Setup .env File

Assign the API endpoint URL to the `.env` file: VITE_API_URL

```bash
VITE_API_URL=API_ENDPOINT
```

### Start the app

Run the command below

```bash
npm run dev
```

### Preview the project in your browser:

```bash
http://localhost:5173/
```

### Deployment

A Dockerfile has already been set up in the root folder of the project, including:

```bash
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
```

Nginx Configuration Using Google Cloud’s Default Port 8080

```bash
server {
    listen 8080;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    error_page 404 /index.html;
    location = /index.html {
        internal;
    }
}
```

### Uploading to Google Cloud Run

Replace the project name based on your preference, then deploy the application using the following command:

```bash
gcloud run deploy shift-scheduler-frontend --source . --region us-central1 --project fc-itw-joenell --platform managed --allow-unauthenticated
```

Wait for the upload to finish—it will then generate the service URL for the API endpoint:

```bash
https://shift-scheduler-frontend-178551843876.us-central1.run.app
```
