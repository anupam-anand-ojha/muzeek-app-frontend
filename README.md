# 🎵 Muzeek App

Muzeek is a full-stack music streaming platform where users can listen to songs and artists can upload and manage their own music.

--------------------------------------------------

## 🚀 Features

### 🔐 Role-Based Authentication

There are two types of users in the app:

### 👤 Normal User
- Browse songs  
- Play and listen to music 🎧  
- Cannot upload songs  

### 🎤 Artist
- Upload songs  
- Add song details (title, thumbnail, etc.)  
- Manage their uploaded songs  

--------------------------------------------------

## 🛠️ Tech Stack

Frontend:
- React.js  
- Axios  
- React Router  

Backend:
- Node.js  
- Express.js  

Database:
- MongoDB  

Storage:
- ImageKit / Cloudinary  

--------------------------------------------------

## 📂 Folder Structure

/frontend  
  /components  
  /pages  
  /api  

/backend  
  /controllers  
  /routes  
  /models  
  /middlewares  

--------------------------------------------------

## ⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/your-username/muzeek-app.git

2. Install dependencies

Frontend:

cd frontend  
npm install  
npm run dev  

Backend:

cd backend  
npm install  
npm run dev  

--------------------------------------------------

## 🌐 Deployment

Frontend → Vercel  
Backend → Render  

--------------------------------------------------

## 📡 API Endpoints

Auth Routes:
POST /signup  
POST /login  

Music Routes:
GET /songs → Get all songs  
POST /upload → Upload song (Artist only)  

--------------------------------------------------

## 🔒 Access Control

User → Can only listen songs 🎧  
Artist → Can upload and manage songs 🎤  

--------------------------------------------------

## 💡 Future Improvements

- Playlist feature  
- Like & Favorite songs  
- Comments system  
- AI recommendations  

--------------------------------------------------

## 👨‍💻 Author

Anupam anand