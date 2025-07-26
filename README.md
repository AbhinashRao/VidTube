# 📺 VidTube – A MERN Stack Video Sharing Platform

VidTube is a full-stack video sharing platform inspired by YouTube. Users can upload, watch, like, comment on, and subscribe to videos and channels. Built using the powerful MERN stack, the project includes user authentication, theme toggling, and Docker + GitHub Actions support for real-world deployment and CI.

---

## 🚀 Features

- 🔐 JWT-based user authentication (signup/login)
- 📤 Upload videos using Multer
- 📺 Watch videos with custom player
- ❤️ Like/Dislike functionality
- 💬 Comment system for videos
- 👤 Channel support with subscriptions
- 🔍 Search for videos by title
- 🌙 Light/Dark mode toggle
- 🐳 Docker Compose setup for easy containerization
- ⚙️ GitHub Actions workflows for CI

---

## 🧰 Tech Stack

- **Frontend**: React.js, styled-components, Axios, React Router DOM  
- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Authentication**: JWT (JSON Web Tokens)  
- **DevOps**: Docker, Docker Compose, GitHub Actions  
---

## 📁 Folder Structure

VidTube/
├── client/ 
│ └── src/
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── index.js
├── .github/workflows/ # GitHub Actions config
├── docker-compose.yml
├── .env.example
└── README.md


## ⚙️ Getting Started

### 1️⃣ Clone the Repository

git clone https://github.com/AbhinashRao/VidTube.git
cd VidTube
2️⃣ Setup Environment Variables
Create a .env file inside /server using the example below:
ini
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret

3️⃣ Install Dependencies
Backend:
cd server
npm install

Frontend:

cd ../client
npm install

4️⃣ Run the App
Start Backend:
cd server
npm run dev
Start Frontend:
cd ../client
npm start
Visit: http://localhost:3000

🐳 Run with Docker (Optional)
docker-compose up --build
This will spin up both frontend and backend in containers.

🧪 CI with GitHub Actions
This project includes basic CI workflows to:

Run build/test jobs on every push

Help automate PR checks

Found in .github/workflows/.

🌐 Live Demo
(Optional: Add deployed link here from Vercel, Netlify, or Render)

🧠 Topics (Tags)
mern-stack, react, nodejs, express, mongodb, jwt-auth, video-sharing, youtube-clone, docker-compose, github-actions



👨‍💻 Author
Abhinash Rao Madikonda
📧 abhinashrao28@gmail.com
🔗 GitHub | LinkedIn
