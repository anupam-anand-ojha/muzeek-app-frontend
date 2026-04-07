import React from 'react'

function SignUp() {
  return (
    <div className="px-20 my-20">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Sign Up now!
      </h1>

      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>  
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>

        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn btn-neutral mt-4">Sign Up</button>
          </fieldset>
        </div>
      </div>

    </div>
  )
}

export default SignUp