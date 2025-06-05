# Shift Scheduler Frontend (Vue 3 Composition API)

## Overview

This project is a Shift Scheduler application frontend built using Vue 3 with the Composition API. It allows users to create, update, and view shifts with accurate time handling across different timezones. The app integrates with a backend API that stores shift data in UTC format and dynamically converts shift times based on the user’s selected timezone.

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

Start by cloning the project:

```bash
git clone https://github.com/alonzojoe/shift-scheduler-frontend.git
cd shift-scheduler-frontend.git
```

### Install Dependencies

Run the following to install required packages:

```bash
npm install
```

### Setup .env File

Assignt the API endpoint URL to the `.env` file: VITE_API_URL

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
