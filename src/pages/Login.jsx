import React from 'react'
import API from '../api/axios'
import { useState } from 'react'

function Login() {


  const [form, setform] = useState({
    email: "",
    password: ""
  })


  const handlesubmit = async () => {
    try{
       const res =  await API.post("/login", form)
      alert("user login sucessfull")
      console.log(res.data)
    }
    catch(err){
      console.error(err)
    }
  }

  const handlechange = (e) =>{
    setform({...form, [e.target.name]: e.target.value})
  }
  

  return (
    <div className="hero min-h-screen" style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1725014880788-9faccc7ca16e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljfGVufDB8MHw0fHx8Mg%3D%3D)",
  }}> 
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name= "email" type="email" className="input" placeholder="Email"  onChange={handlechange}/>
          <label className="label">Password</label>
          <input name= "password" type="password" className="input" placeholder="Password" onChange={handlechange} />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4" onClick={handlesubmit}>Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login