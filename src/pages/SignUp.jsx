import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "user"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const res = await API.post("/api/auth/register", form);

      console.log(res.data);
      alert("Signup successful");

      navigate("/artistlogin");
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (

  

    <div className="hero  min-h-screen" style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1679746556827-a4722297a613?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8MHw0fHx8Mg%3D%3D)",
  }}>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">

          <h2 className="text-2xl font-bold text-center">Sign Up</h2>

          {/* username */}
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="input input-bordered"
            onChange={handleChange}
          />

          {/* email */}
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="input input-bordered"
            onChange={handleChange}
          />

          {/* password */}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="input input-bordered"
            onChange={handleChange}
          />

          {/* role */}
          <label className="label">Select Role</label>

          <select
            name="role"
            className="select select-bordered"
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="artist">Artist</option>
          </select>

          <button
            className="btn btn-neutral mt-4"
            onClick={handleSignup}
          >
            Sign Up
          </button>

        </div>
      </div>
    </div>
  
  );
}

export default SignUp;