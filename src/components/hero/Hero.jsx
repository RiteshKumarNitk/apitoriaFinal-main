import React, { useRef, useState } from "react";
import { FaRegCirclePlay, FaRegPauseCircle } from "react-icons/fa6";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div>
      <div className="px-4 py-16 md:px-8 md:py-32">
        <div className="grid gap-4 md:gap-8 items-start justify-center">
          <div className="relative group">
            {/* Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            {/* Video Container */}
            <div className="relative rounded-lg overflow-hidden">
              {/* Video Element */}
              <video
                ref={videoRef}
                src="https://player.vimeo.com/external/497943893.sd.mp4?s=2cd0b0d18ed8e3e2348c305042c87183bb7af4fc&profile_id=165"
                className="rounded-lg max-w-full md:max-w-[700px]"
                autoPlay
                loop
                muted
              ></video>

              {/* Play/Pause Button */}
              <div
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer bg-black/30"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <FaRegPauseCircle className="text-lg text-gray-600" />
                ) : (
                  <FaRegCirclePlay className="text-lg text-red-600" />
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
