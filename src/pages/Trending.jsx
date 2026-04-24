import React from 'react'
import Card from '../components/Card'
import { useEffect,useState } from 'react'
import axios from 'axios';


function Trending() {

  const [songs, setsongs] = useState([]);

  useEffect(() => {
    axios.get("https://anupam-music-api.onrender.com/api/music")
      .then(res => setsongs(res.data))
      .catch(err => console.log(err));
  }, [])
  
  return (

    

 <div className="cards grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-20 my-20 pr-5">

   {songs.slice(12, 24).map((song) => (
          <Card 
            key={song._id}
            songName={song.title}
            image={song.image}
            audio={song.url}
          />
        ))}
 </div>
  )
}

export default Trending
