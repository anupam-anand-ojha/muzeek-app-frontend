import React from 'react'

function Setting() {
  return (
    <div className="p-10 mt-10">

      <h1 className="text-3xl font-bold mb-6">
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
  )
}

export default Setting