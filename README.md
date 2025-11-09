# 🎨 Imagify

A Full-Stack Text-to-Image Generator AI SaaS Application built with the MERN Stack.

## 📋 Description

Imagify is an AI-powered SaaS platform that generates images from text descriptions. Built using React.js for the frontend and Node.js/Express for the backend, it provides a seamless experience for creating AI-generated images.

## 🚀 Features

- 🤖 AI-powered text-to-image generation
- 💳 SaaS subscription model
- 🎨 Modern and responsive UI
- 🔐 User authentication and authorization
- ⚡ Fast and efficient image processing

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- REST API

## 📁 Project Structure

```
Imagify/
├── client/          # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/          # Express backend
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── server.js
└── README.md
```

## 🔧 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Clone the repository
```bash
git clone https://github.com/sahilk-dev/Imagify.git
cd Imagify
```

### Install dependencies

#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd client
npm install
```

## 🏃‍♂️ Running the Application

### Start the backend server
```bash
cd server
npm start
```

### Start the frontend development server
```bash
cd client
npm run dev
```

The application should now be running:
- Frontend: `http://localhost:5173` (or the port shown in terminal)
- Backend: `http://localhost:5000` (or your configured port)

## 🔐 Environment Variables

Create `.env` files in both client and server directories:

### Server `.env`
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
AI_API_KEY=your_ai_api_key
```

### Client `.env`
```
VITE_API_URL=http://localhost:5000
```

## 👨‍💻 Author

**Sahil Kamila**
- GitHub: [@sahilk-dev](https://github.com/sahilk-dev)
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/sahilkamila143)
- Email: sahilkamila143@gmail.com
