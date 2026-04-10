import React, { useState } from "react";

function Card({ songName, image ="https://plus.unsplash.com/premium_vector-1727360201453-3c88c322a322?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
, audio }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [music, setMusic] = useState(null);

  const handlePlayPause = () => {
    if (!music) {
      const newMusic = new Audio(audio);
      newMusic.play();
      setMusic(newMusic);
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        music.pause();
        setIsPlaying(false);
      } else {
        music.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="card bg-base-200 w-full shadow-xl hover:bg-base-300 transition-all duration-300 cursor-pointer group">

      <figure className="px-4 pt-4 relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={songName}
          className="rounded-xl w-full h-full object-cover"
        />

        <button
          onClick={handlePlayPause}
          className="btn btn-circle btn-primary absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-sm font-bold truncate">
          {songName}
        </h2>
      </div>

    </div>
  );
}

export default Card;