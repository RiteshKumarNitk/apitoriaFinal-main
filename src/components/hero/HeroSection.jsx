import React, { useRef, useState } from "react";
import "../../assets/style.css";
import logo from "../../assets/images/logo.jpg"
import img from "../../assets/images/image.png"
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
const HeroSection = () => {


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
      <div className="">
      <div className="section-2 flex flex-col md:flex-row items-center md:justify-between py-8 md:py-16 px-4 md:px-0">
  <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4 md:px-10">
    <img src={logo} alt="" className="w-full h-auto lg:p-10 p-4 md:p-5" />
  </div>
  <div className="w-full md:w-1/2">
    <p className="leading-[35px] font-thin text-[25px] text-[#c21f28] mb-4 md:w-[60%]">
      The promise of Agility, Reliability, and Innovation
    </p>
    <p className="text-[#675259] text-[20px] md:text-[25px] font-light leading-[30px] md:leading-[35px] mb-4 md:w-[90%]">
      Apitoria is focused on APIs, sustainability, good health, and you. As a 100% subsidiary of Aurobindo Pharma, a global powerhouse in the pharmaceutical realm. Apitoria is an established partner for pharmaceutical companies worldwide. So together, we can be the force towards
    </p>
    <div className="leading-none tracking-[2px] md:tracking-[4px]">
      <h2 className="text-[#c21f28] text-[40px] md:text-[60px] font-thin">Accelerating</h2>
      <h3 className="text-[#3c286b] text-[40px] md:text-[60px] font-thin">
        Good
      </h3>
      <h3 className="text-[#3c286b] text-[40px] md:text-[60px]">
        Health<span className="text-[#c21f28] text-[35px] md:text-[45px]">.</span>
      </h3>
    </div>
  </div>
</div>


        <div className="Scroll t-center">
          {/* <a href="">Scroll to explore</a> */}
          <div className="text-black font-thin">Scroll to explore</div>
          <div className="m-auto h-[80px] w-[1px] bg-black mt-[10px]"></div>
          <div className="picture">
            {/* <img src={img} alt="" />
            <div className="round">
              <a href="">
                width: 100%;
    border-radius: 20px;
              </a>
            </div> */}
             <div className="relative flex justify-center">
                <video
                  ref={videoRef}
                  src="https://videos.pexels.com/video-files/3214527/3214527-uhd_2560_1440_25fps.mp4"
                  className="w-[1000px]  rounded-[20px] "
                  autoPlay
                  loop
                  muted
                ></video>
    
                {isPlaying ? (
                    <div className="">
                      <FaPause
                      className="absolute inset-0 m-auto text-7xl  rounded-full h-18 bg-white p-5  text-red-600 z-10 cursor-pointer"
                      onClick={handlePlayPause}
                    />
                    </div>
                 
                ) : (
                  <FaPlay
                  onClick={handlePlayPause}
                  className="absolute inset-0 m-auto text-7xl rounded-full  h-18 bg-white p-5   text-red-600 z-10 cursor-pointer"
                />
                )}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
