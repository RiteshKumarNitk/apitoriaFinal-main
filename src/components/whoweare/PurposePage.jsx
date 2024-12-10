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

const PurposePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-change functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % config.length);
      // console.log("Selected Index Changed:", selectedIndex); // Debugging interval
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [selectedIndex]);

  return (
    <section className="py-5">
      <div className="text-center w-1/2 text-6xl py-6 font-Regular">
        <h5 className="text-[#3c286b] font-thin ">Our Purpose</h5>{" "}
      </div>
      <div className="grid bg-[#D3D7DD] w-1/2 rounded-3xl shadow-xl my-4 max-w-screen-2xl mx-auto xl:gap-0 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
          <img src={labimg} className="w-full h-full rounded-l-3xl" alt="Lab" />
        </div>
        <div className="mr-auto px-16 py-10 mt-auto place-self-center lg:col-span-5">
          <div className=" rounded-2xl p-6 lg:p-8">
            <h2 className="text-2xl lg:text-3xl mb-8">
              <span className="text-purple-700">
                Our purpose is to be your API partner,
              </span>
              <br />
              <span className="text-red-500">
                in taking good health to the world.
              </span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">
                  Through reliability.
                </h3>
                <p className="text-gray-600">
                  Ensuring consistent supply and compliances. Making sure your
                  business objectives are met.
                </p>
              </div>

              <div>
                <h3 className="text-red-500 font-semibold mb-2">
                  Through agility.
                </h3>
                <p className="text-gray-600">
                  By catering to quick requirements, with quick turnaround
                  times. So you can achieve.
                </p>
              </div>

              <div>
                <h3 className="text-red-500 font-semibold mb-2">
                  Through innovation.
                </h3>
                <p className="text-gray-600">
                  With our chemical and production capabilities. To consistently
                  push boundaries.
                </p>
              </div>

              <p className="text-gray-800 mt-8">
                So together, we can accelerate good health.
                <br />
                While putting you at the forefront of it all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposePage;
