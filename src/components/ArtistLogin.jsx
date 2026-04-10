import React, { useState } from 'react'
import API from '../api/axios'
import { useNavigate } from 'react-router-dom'

function ArtistLogin() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleLogin = async () => {
    try {
      const res = await API.post("/api/auth/login", form)

      console.log(res.data)

      
      if (res.data.user.role === "artist") {
        navigate("/upload")   // 🔥 redirect to upload page
      } else {
        alert("Only artists can login here")
      }

    } catch (err) {
      console.log(err)
      alert("Login failed")
    }
  }

  return (
    <div>
      <div className="hero bg-base-200 py-30">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Artist Login</h1>
            <p className="py-6">
              Sign in to your artist account to start creating and sharing your music.
              Upload your tracks, manage your albums, and grow your audience.
              This portal is designed exclusively for artists.
            </p>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">

                <label className="label">Artist Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enter your artist email"
                  onChange={handleChange}
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
                <label className="label">Role</label>
                <input
                  type="text"
                  name="text"
                  className="input"
                  placeholder="Enter your role"
                  onChange={handleChange}
                />

                <div>
                  <a className="link link-hover">Forgot your password?</a>
                </div>

                <button 
                  className="btn btn-neutral mt-4"
                  onClick={handleLogin}
                >
                  Login & Start Creating Music
                </button>

              </fieldset>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ArtistLogin