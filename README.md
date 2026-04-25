# 🎵 Muzeek App

**Muzeek** ek full-stack music streaming platform hai jahan users songs sun sakte hain aur artists apna music upload karke manage kar sakte hain — ek mini Spotify-style system.

---

## 🚀 Key Features

### 🔐 Role-Based Authentication

App me do type ke users hote hain:

### 👤 Normal User

* Songs browse kar sakta hai
* Music play karke sun sakta hai
* Upload access nahi hota

### 🎤 Artist

* Apne songs upload kar sakta hai
* Song details add/edit kar sakta hai (title, thumbnail, etc.)
* Apne uploaded songs ko manage kar sakta hai

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* Axios
* React Router

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB

### Storage:

* Cloudinary / ImageKit

---

## 📂 Project Structure

```bash
/frontend
  /components
  /pages
  /api

/backend
  /controllers
  /routes
  /models
  /middlewares
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/muzeek-app.git
```

### 2. Install Dependencies

#### Frontend:

```bash
cd frontend
npm install
npm run dev
```

#### Backend:

```bash
cd backend
npm install
npm run dev
```

---

## 🌐 Deployment

* Frontend → Vercel
* Backend → Render

---

## 📡 API Endpoints

### 🔐 Auth Routes

* `POST /signup` → User register
* `POST /login` → User login

### 🎵 Music Routes

* `GET /songs` → All songs fetch
* `POST /upload` → Song upload (Artist only)

---

## 🔒 Access Control

* **User:** Sirf songs sun sakta hai
* **Artist:** Songs upload aur manage kar sakta hai

---

## 💡 Future Improvements

* Playlist system
* Like & Favorite feature
* Comment system
* AI-based song recommendations

---

## 👨‍💻 Author

**Anupam Anand**
