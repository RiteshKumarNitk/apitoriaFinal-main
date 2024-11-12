import React, { useRef, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

import { FaRegPauseCircle } from "react-icons/fa";
const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying); // Use functional update
  };
  return (
    <div>
   <div className="px-4 py-16 md:px-8 md:py-32">
  <div className="grid gap-4 md:gap-8 items-start justify-center">
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative rounded-lg flex items-center">
        <div className="relative">
          <video
            ref={videoRef}
            src="https://videos.pexels.com/video-files/3214527/3214527-uhd_2560_1440_25fps.mp4"
            className="rounded-lg max-w-full md:max-w-[700px]"
            autoPlay
            loop
            muted
          ></video>

          {isPlaying ? (
            <FaRegCirclePlay
              className="absolute inset-0 m-auto text-6xl text-red-600 z-10 cursor-pointer"
              onClick={handlePlayPause}
            />
          ) : (
            <FaRegPauseCircle
              className="absolute inset-0 m-auto text-6xl text-red-600 z-10 cursor-pointer"
              onClick={handlePlayPause}
            />
          )}
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Hero;
