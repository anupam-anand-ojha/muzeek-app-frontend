import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from "axios";

function Herocard() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get("https://anupam-music-api.onrender.com/api/music")
      .then(res => setSongs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='pl-8'>

      {/* Top Charts */}
      <h2 className="text-3xl font-bold mt-20 mb-6 px-8">
        Top Charts
      </h2>

      <div className="flex overflow-x-auto gap-6 px-8 scrollbar-hide">
        {songs.slice(0, 12).map((song) => (
          <Card 
            key={song._id}
            songName={song.title}
            image={song.image}
            audio={song.url}
          />
        ))}
      </div>

      {/* New Releases */}
      <h2 className="text-3xl font-bold mt-20 mb-6 px-8">
        New Releases
      </h2>

      <div className="flex overflow-x-auto gap-6 px-8 scrollbar-hide">
        {songs.slice(12, 24).map((song) => (
          <Card 
            key={song._id}
            songName={song.title}
            image={song.image}
            audio={song.url}
          />
        ))}
      </div>

    </div>
  )
}

export default Herocard