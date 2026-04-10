import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Songs() {

  const [songs, setSongs] = useState([]); 

  useEffect(() => {
    axios.get("http://localhost:3000/api/music") 
      .then(res => {
        console.log(res.data);
        setSongs(res.data); 
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="cards grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 pl-15 mt-20 pr-5">
      
      {songs.map((song) => (
        <Card 
          key={song._id}
          songName={song.title}
          image={song.image}
          audio={song.url}
        />
      ))}

    </div>
  );
}

export default Songs;