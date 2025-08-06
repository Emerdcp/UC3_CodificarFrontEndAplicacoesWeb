import React from "react";
import './Video.css'

function Video(props) {
  return (
    <div className='video'>
      <iframe
        src="https://www.youtube.com/embed/Qlbz1UZphTw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video