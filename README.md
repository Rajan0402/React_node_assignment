# React Node Assignment

A full-stack application with a **React frontend** (Ant Design & Tailwind CSS) and a **Node.js/Express backend** for user profile handling. The app allows users to submit a profile form and view their data on a profile page with age calculation and a random dog image.

---

## Features

- **Frontend (React)**

  - Form for First Name, Last Name, and Date of Birth using Ant Design components and Tailwind CSS
  - Form validation
  - On submit, sends POST request to backend with user data
  - Redirects to a display page showing:
    - First Name, Last Name, calculated Age
    - Random dog image as profile photo (via https://dog.ceo/api/breeds/image/random)

- **Backend (Node.js/Express)**
  - POST `/api/user` endpoint accepts and handles user profile data

---

## Prerequisites

- Node.js (recommend v18+)
- npm or yarn

---

## Folder Structure

```
React_node_assignment/
├── client/ # React frontend
└── server/ # Express backend
```

---

## Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/Rajan0402/React_node_assignment.git
cd React_node_assignment
```

### 2. Install Dependencies And bring up service

#### Backend

```
cd server
npm install
npm start
```

#### Frontend

```
cd ../client
npm install
npm start
```

---

- Server by default runs at [http://localhost:3000](http://localhost:3000)
- Accepts POST requests at `/api/user`

- App by default runs at [http://localhost:3001](http://localhost:3001)

---

## Usage

1. Open [http://localhost:3001](http://localhost:3001) in your browser.
2. Fill out the profile form (first name, last name, date of birth) and submit.
3. After submission, you are redirected to a display page.
4. View your submitted details, calculated age, and a random dog image.

---
