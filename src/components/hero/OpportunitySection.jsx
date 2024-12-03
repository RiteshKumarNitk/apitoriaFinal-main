import React, { useState, useEffect } from "react";
import labimg from "../../assets/images/lab-img.png";
import { GoDot, GoDotFill } from "react-icons/go";
import { FaFlask, FaIndustry, FaCogs, FaGlobe, FaLeaf } from "react-icons/fa";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";

// Define configuration for text, icon, and image
const config = [
  {
    text: "10 API manufacturing plants",
    icon: <FaFlask className="text-6xl text-white" />,
    img: icon1,
  },
  {
    text: "Strategic backward integration",
    icon: <FaIndustry className="text-6xl text-white" />,
    img: icon2,
  },
  {
    text: "18,000+ MT installed API capacity",
    icon: <FaCogs className="text-6xl text-white" />,
    img: icon3,
  },
  {
    text: "Strong balance sheet to capitalise on opportunities",
    icon: <FaGlobe className="text-6xl text-white" />,
    img: icon4,
  },
  {
    text: "Multi-scale facilities (gram to tonnage)",
    icon: <FaLeaf className="text-6xl text-white" />,
    img: icon5,
  },
];

const OpportunitySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-change functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % config.length);
      console.log("Selected Index Changed:", selectedIndex); // Debugging interval
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [selectedIndex]);

  return (
    <section className="py-5">
      <div className="text-center text-4xl py-6 font-thin">
        <h5 className="text-[#3c286b]">Capabilities. Possibilities.</h5>
        <h6 className="text-[#c21f28]">All the opportunity, to accelerate</h6>
      </div>
      <div className="grid bg-gradient-to-t from-[#402869] via-[#7F2449] to-[#C21F28] rounded-3xl shadow-xl my-4 max-w-screen-xl mx-auto xl:gap-0 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
          <img
            src={labimg}
            className="w-full h-full rounded-l-3xl"
            alt="Lab"
          />
        </div>
        <div className="mr-auto px-16 py-10 mt-auto place-self-center lg:col-span-5">
          {/* Dynamic Icon */}
          {/* <div className="mb-4">{config[selectedIndex].icon}</div> */}
          <img
              src={config[selectedIndex].img}
              alt="Dynamic"
              className="h-16 w-16 "
            />
          <div className="my-2 bg-white h-[5px] w-[65px] rounded-2xl"></div>
          {/* Dynamic Text */}
          <p className="text-white text-4xl font-thin">
            {config[selectedIndex].text}
          </p>
          {/* Dynamic Image */}
          <div className="py-4">
           
          </div>
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
