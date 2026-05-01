🎵 Muzeek App

Muzeek ek full-stack music streaming platform hai jahan users songs stream kar sakte hain aur artists apna music upload aur manage kar sakte hain — ek mini Spotify-style system.

🚀 Features
🔐 Role-Based Authentication
👤 User: Songs browse & stream kar sakta hai
🎤 Artist: Songs upload aur manage kar sakta hai
🎧 Music streaming
📤 Song upload with details (title, thumbnail, etc.)
📁 Artist dashboard for content management
🛠️ Tech Stack
Frontend: React.js, Axios, React Router
Backend: Node.js, Express.js
Database: MongoDB
Storage: Cloudinary / ImageKit
📂 Project Structure
/frontend   → UI (components, pages)
/backend    → API (routes, controllers, models)
⚙️ Setup
git clone https://github.com/your-username/muzeek-app.git

# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
npm install
npm run dev
📡 API
POST /signup → Register
POST /login → Login
GET /songs → Fetch songs
POST /upload → Upload (Artist only)
🌐 Deployment
Frontend → Vercel
Backend → Render
💡 Future Plans
Playlist system
Like & Favorite
Comments
AI recommendations
👨‍💻 Author

Anupam Anand