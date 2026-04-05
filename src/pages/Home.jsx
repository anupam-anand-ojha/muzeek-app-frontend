import React from "react";
import Card from "../components/Card";

function Home() {
  return (
    <div className="p-10 mt-16">

      {/* Welcome Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3">
          🎵 Welcome to Music App
        </h1>

        <p className="text-gray-600">
          Discover trending songs, new releases, podcasts and your favorite artists.
        </p>
      </div>

      {/* Featured Songs */}
      <h2 className="text-2xl font-semibold mb-6">
        Featured Songs
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

        <Card songName="Bekhayali" />
        <Card songName="Kesariya" />
        <Card songName="Ranjha" />
        <Card songName="Tum Hi Ho" />
        <Card songName="Raataan Lambiyan" />
        <Card songName="Khairiyat" />

      </div>

      {/* Info Section */}
      <div className="mt-12">

        <h2 className="text-2xl font-semibold mb-3">
          Explore the App
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li> Trending Songs</li>
          <li> New Releases</li>
          <li> Top Charts</li>
          <li> Podcasts</li>
          <li> Popular Artists</li>
        </ul>

      </div>

    </div>
  );
}

export default Home;