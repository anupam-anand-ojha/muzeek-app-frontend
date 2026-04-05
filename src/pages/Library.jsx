import React from 'react'
import Card from '../components/Card'

function Library() {
  return (
    <div className="p-10 mt-10">

      <h1 className="text-3xl font-bold mb-6">Your Library</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <Card songName="Liked Songs" />
        <Card songName="Workout Playlist" />
        <Card songName="Chill Vibes" />
        <Card songName="Coding Music" />

      </div>

    </div>
  )
}

export default Library