import React from 'react'

function Podcast() {
  return (
   <div className='h-screen overflow-hidden bg-cover bg-center bg-no-repeat'style={{ backgroundImage: "url(https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1740&auto=format&fit=crop)" }}>
    <div className="px-20 my-20">

      <h1 className="text-3xl font-bold mb-6">
        Podcasts
      </h1>

      <ul className="list-disc ml-6 text-lg">

        <li>Tech Talks Daily</li>
        <li>Startup Stories</li>
        <li>Motivation with Sandeep</li>
        <li>History Explained</li>

      </ul>

    </div>
    </div>
    
  )
}

export default Podcast