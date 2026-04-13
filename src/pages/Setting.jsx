import React from 'react'

function Setting() {
  return (
    <div className="h-screen overflow-hidden bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1729857008877-c61ab58b300c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}>
      <div className='px-20 my-20'>
      <h1 className="text-3xl font-bold mb-6 ">
        Settings
      </h1>

      <div className="space-y-4">

        <button className="border px-4 py-2">
          Change Theme
        </button>

        <button className="border px-4 py-2">
          Manage Account
        </button>

        <button className="border px-4 py-2">
          Logout
        </button>

      </div>
      </div>

    </div>
  )
}

export default Setting