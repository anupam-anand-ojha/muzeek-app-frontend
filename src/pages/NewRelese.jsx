import React from 'react'
import Card from '../components/Card'

function NewReleases() {
  return (
    <div className="p-10 mt-10">

      <h1 className="text-3xl font-bold mb-6">
        New Releases
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <Card songName="Arijit Singh Album" />
        <Card songName="Weekend Hits 2026" />
        <Card songName="Bollywood Fresh" />
        <Card songName="Global Pop" />

      </div>

    </div>
  )
}

export default NewReleases