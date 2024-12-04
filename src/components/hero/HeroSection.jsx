import React, { useRef, useState } from "react";
import "../../assets/style.css";
import logo from "../../assets/pics/logoapitoria.png";
import img from "../../assets/images/image.png";
import { FaPlay, FaPause } from "react-icons/fa";
import bg2 from "../../assets/pics/bg2.png";

const HeroSection = () => {
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
      <div
        className="py-16"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* Section Content */}
        <div className="section-2 flex flex-col md:flex-row items-center md:justify-between py-8 md:py-16 px-4 md:px-8">
          {/* Logo Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4 md:px-10">
            <img
              src={logo}
              alt="Apitoria Logo"
              className="w-full h-auto lg:p-10 p-4 md:p-5"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <p className="leading-[35px] font-extralight text-[22px] md:text-[25px] text-[#c21f28] mb-4">
              The promise of Agility, Reliability, and Innovation
            </p>
            <p className="text-[#675259] text-[18px] md:text-[20px] font-light leading-[28px] md:leading-[35px] mb-4">
              Apitoria is focused on APIs, sustainability, good health, and you.
              As a 100% subsidiary of Aurobindo Pharma, a global powerhouse in
              the pharmaceutical realm. Apitoria is an established partner for
              pharmaceutical companies worldwide. So together, we can be the
              force towards
            </p>
            <div className="leading-none tracking-[1px] md:tracking-[3px]">
              <h2 className="text-[#c21f28] text-[36px] md:text-[48px]  font-extralight font-[poppins]">
                Accelerating
              </h2>
              <h3 className="text-[#3c286b] text-[36px] md:text-[48px] font-extralight font-[poppins]">
                Good
              </h3>
              <h3 className="text-[#3c286b] text-[36px] md:text-[48px] font-extralight font-[poppins]">
                Health
                <span className="text-[#c21f28] text-[28px] md:text-[36px]">
                  .
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="scroll t-center">
          <div className="text-black font-extralight text-center">Scroll to explore</div>
          <div className="m-auto h-[80px] w-[1px] bg-black mt-[10px]"></div>
          <div className="flex justify-center">
            <div className="relative flex justify-center items-center w-full max-w-[1200px] rounded-3xl overflow-hidden mt-8 px-4 md:px-0">
              {/* Video Element */}
              <video
                ref={videoRef}
                src="https://videos.pexels.com/video-files/3214527/3214527-uhd_2560_1440_25fps.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              ></video>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#402869] via-[#7F2449] to-[#C21F28] opacity-75 pointer-events-none"></div>

              {/* Play/Pause Button */}
              <div
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
              >
                {isPlaying ? (
                  <FaPause className="text-[50px] md:text-[80px] rounded-full bg-white p-4 text-red-600 shadow-lg overflow-visible" />
                ) : (
                  <FaPlay className="text-[50px] md:text-[80px] rounded-full bg-white p-4 text-red-600 shadow-lg overflow-visible" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
