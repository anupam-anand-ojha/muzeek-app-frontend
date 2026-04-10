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
      alert("Signup failed");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
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