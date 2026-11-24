# IMESSAGE – Real-Time Chat Application

A full-stack real-time messaging application built using the MERN stack, Socket.IO, and Clerk authentication. IMESSAGE enables users to communicate through an interactive chat interface with instant message updates and online user tracking.

## 🚀 Overview

IMESSAGE is designed to provide real-time communication through a responsive web application. It combines REST APIs for backend operations with Socket.IO for real-time communication, while Clerk handles authentication and webhooks synchronize user information with the backend.

## ✨ Key Features

- **User Authentication:** Secure user authentication and session management using Clerk.
- **Real-Time Messaging:** Instant message communication using Socket.IO.
- **Online User Tracking:** Track online users through real-time socket connections.
- **Image Uploads:** Upload and manage images using Multer and ImageKit.
- **Webhook Integration:** Synchronize user information with the backend using Clerk webhooks.
- **Database Management:** Store application data using MongoDB and Mongoose.
- **Responsive Interface:** Interactive frontend built with React.js.
- **Containerization:** Docker support for consistent application environments.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Clerk |
| Real-Time Communication | Socket.IO |
| File Upload | Multer, ImageKit |
| Webhooks | Clerk Webhooks |
| Containerization | Docker |
| Version Control | Git, GitHub |

## 🏗️ Project Architecture

The application follows a client-server architecture.

```text
                IMESSAGE
                    |
          +---------+---------+
          |                   |
       Frontend             Backend
       React.js             Node.js
          |                   |
          |                Express.js
          |                   |
          |          +--------+--------+
          |          |        |        |
          |       REST API  Socket.IO Webhooks
          |          |        |        |
          |          +--------+--------+
          |                   |
          |              MongoDB Atlas
          |                   |
          +---- Real-Time Communication

       Clerk Authentication
       ImageKit Image Storage
       Docker Containerization
```

## 📂 Project Structure

```text
IMESSAGE/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── ...
│   ├── Dockerfile
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── ...
│   ├── Dockerfile
│   └── package.json
│
└── docker-compose.yml
```

*Note: The structure above is a simplified representation. Refer to the respective directories for the complete source code.*

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd IMESSAGE
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

Create `.env` files in the frontend and backend directories.

**Frontend (.env)**

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

**Backend (.env)**

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Make sure the environment variable names match those referenced in your actual source code.

### 5. Run the Application

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

Open the local URL displayed by Vite in your browser.

## 🐳 Docker Setup

The project includes Docker configuration for containerizing the application.

If your Docker Compose configuration is ready, run:

```bash
docker compose up --build
```

To stop the containers:

```bash
docker compose down
```

## 🔐 Security and Authentication

- Clerk handles user authentication.
- Backend middleware protects authenticated API routes.
- Clerk webhooks synchronize user-related information.
- Environment variables are used to configure sensitive credentials.

## 📸 Screenshots

Add screenshots of your application here to demonstrate its interface.

Suggested screenshots:
- Login / Signup Page
- Main Chat Interface
- Conversation View
- Online Users Interface

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Building full-stack applications using React.js and Node.js.
- Implementing real-time communication using Socket.IO.
- Integrating third-party authentication using Clerk.
- Working with webhooks and backend event handling.
- Managing application data using MongoDB and Mongoose.
- Implementing image upload functionality.
- Containerizing applications using Docker.

## 👨‍💻 Author

**Ayush Singh**

- GitHub: [AyushRajput1012](https://github.com/AyushRajput1012)
- LinkedIn: [Connect with me](https://linkedin.com/in/ayushrajput2060)
- Portfolio: [AyushRajput.tech](https://AyushRajput.tech)

---

⭐ If you find this project interesting, consider giving it a star!
