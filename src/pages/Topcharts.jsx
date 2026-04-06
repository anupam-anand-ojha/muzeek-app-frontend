import React from 'react'
import Card from '../components/Card'

function TopCharts() {
  return (
    <div className="px20 my-20">

      <h1 className="text-3xl font-bold mb-6 px-20 my-20">
        Top Charts
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-20 my-20">

        <Card songName="Top India" />
        <Card songName="Top Global" />
        <Card songName="Top Bollywood" />
        <Card songName="Top Indie" />

      </div>

    </div>
  )
}

export default TopCharts