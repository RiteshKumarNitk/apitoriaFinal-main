import React, { useState, useEffect } from "react";
import labimg from "../../assets/images/lab-img.png";
import { GoDot, GoDotFill } from "react-icons/go";
import { FaFlask, FaIndustry, FaCogs, FaGlobe, FaLeaf } from "react-icons/fa";

// Define configuration for text, icon, and image
const config = [
  {
    text: "State-of-the-art API R&D centre",
    icon: <FaFlask className="text-6xl text-white" />,
    img: "https://via.placeholder.com/150/Flask", // Replace with actual image URL
  },
  {
    text: "Advanced manufacturing capabilities",
    icon: <FaIndustry className="text-6xl text-white" />,
    img: "https://via.placeholder.com/150/Industry", // Replace with actual image URL
  },
  {
    text: "Innovative product development",
    icon: <FaCogs className="text-6xl text-white" />,
    img: "https://via.placeholder.com/150/Development", // Replace with actual image URL
  },
  {
    text: "Global distribution network",
    icon: <FaGlobe className="text-6xl text-white" />,
    img: "https://via.placeholder.com/150/Globe", // Replace with actual image URL
  },
  {
    text: "Sustainable solutions",
    icon: <FaLeaf className="text-6xl text-white" />,
    img: "https://via.placeholder.com/150/Sustainability", // Replace with actual image URL
  },
];

const OpportunitySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-change functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % config.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-5">
      <div className="text-center text-4xl py-6 font-thin">
        <h5 className="text-[#3c286b]">Capabilities. Possibilities.</h5>
        <h6 className="text-[#c21f28]">All the opportunity, to accelerate</h6>
      </div>
      <div className="grid bg-gradient-to-t from-[#402869] to-90% via-[#7F2449] to-[#C21F28] rounded-3xl shadow-xl my-4 max-w-screen-xl mx-auto xl:gap-0 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
          <img
            src={labimg}
            className="w-full h-full rounded-l-3xl"
            alt="Lab"
          />
        </div>
        <div className="mr-auto px-16 py-10 mt-auto place-self-center lg:col-span-5">
          {/* Dynamic Icon */}
          <div className="mb-4">{config[selectedIndex].icon}</div>
          <div className="my-2 bg-white h-[5px] w-[90px] rounded-2xl"></div>
          {/* Dynamic Text */}
          <p className="text-white text-4xl font-thin">
            {config[selectedIndex].text}
          </p>
          <div className="flex py-3 gap-2">
            {config.map((_, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer"
              >
                {index === selectedIndex ? (
                  <GoDotFill className="text-2xl text-white" />
                ) : (
                  <GoDot className="text-2xl text-white" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
