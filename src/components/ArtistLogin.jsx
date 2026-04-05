import React from 'react'

function ArtistLogin() {
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
                  className="input"
                  placeholder="Enter your artist email"
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Enter your password"
                />

                <div>
                  <a className="link link-hover">Forgot your password?</a>
                </div>

                <button className="btn btn-neutral mt-4">
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