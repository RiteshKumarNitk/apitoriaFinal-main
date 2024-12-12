import React, { useState } from "react";
import { Link } from "react-router-dom";
import apitorialogo from "../../assets/pics/logoapitorialogo.png";
import personpic from "../../assets/lifeatapitoria/lab.jpg";
import BusinessCare from "../whoweare/BusinessCare";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const accordionData = [
  {
    title: "Integrity",
    content: (
      <>
        <p className=" ">
          Our leaders uphold the highest standards of integrity, demonstrating
          honesty, ethics, and transparency in all their actions and decisions.
        </p>
      </>
    ),
  },
  {
    title: "Motivation",
    content: (
      <>
        <p className="">
          Our leaders uphold the highest standards of integrity, demonstrating
          honesty, ethics, and transparency in all their actions and decisions.
        </p>
      </>
    ),
  },
  {
    title: "Motivation",
    content: (
      <>
        <p className="">
          Our leaders uphold the highest standards of integrity, demonstrating
          honesty, ethics, and transparency in all their actions and decisions.
        </p>
      </>
    ),
  },
  {
    title: "Purpose",
    content: (
      <>
        <p className="">
          Our leaders uphold the highest standards of integrity, demonstrating
          honesty, ethics, and transparency in all their actions and decisions.
        </p>
      </>
    ),
  },
  {
    title: "Motivation",
    content: (
      <>
        <p className="">
          Our leaders uphold the highest standards of integrity, demonstrating
          honesty, ethics, and transparency in all their actions and decisions.
        </p>
      </>
    ),
  },
];
const Impect = ({
  backgroundImage,
  title,
  description,
  cards,
  overlayImage,
  breadcrumbs,
}) => {
  const [activeIndex, setActiveIndex] = useState(0); // Set the first accordion item as active by default

  const toggleAccordion = (index) => {
    // Keep the first accordion open always
    setActiveIndex(index === activeIndex ? activeIndex : index);
  };

  return (
    <section
      className=" bg-transparent"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="px-4 sm:px-6 lg:px-32">
        <div className="text-center py-6 pt-12 font-sans">
          <h6 className="text-[#c21f28] text-2xl md:text-3xl lg:text-4xl font-semibold">
            Leading the way through IMPACT.
          </h6>
          <p className="text-[#000000] text-center text-[14px]  lg:max-w-3xl  md:max-w-5xl max-w-full mx-auto mt-4">
            Apitoria’s leadership is not about ‘authority’. It’s about creating
            an IMPACT. Our leaders embody Integrity (I), Motivation (M), Purpose
            (P), Adaptability (A), Collaboration (C), and Transformation (T).
            Driving excellence and innovation, at every step of the way.
          </p>
        </div>

        <div className="grid bg-[#efebea7e]  rounded-3xl shadow-xl max-w-screen-xl mx-auto lg:grid-cols-2 gap-0  overflow-hidden mt-12">
          {/* Left Section: Image */}

          <div className="flex flex-col justify-center px-8 py-8 space-y-8 lg:px-12 lg:py-12 bg-gradient-to-t from-[#402869] via-[#7F2449] to-[#C21F28] text-white ">
            <div className=" text-white">
              <div id="accordion-flush">
                {accordionData.map((item, index) => (
                  <div key={index}>
                    <h2 id={`accordion-flush-heading-${index}`}>
                      <button
                        type="button"
                        className={`flex items-center transition-all justify-between w-full py-4 px-3 font-medium ${
                          activeIndex === index
                            ? "text-white" // Active state
                            : "text-gray-200" // Non-active state (gray)
                        } border-b border-gray-200 border-opacity-60 gap-3`}
                        onClick={() => toggleAccordion(index)}
                      >
                        <h1>{item.title}</h1>
                        {activeIndex === index ? (
                          <IoIosArrowUp className="w-5 h-5" />
                        ) : (
                          <IoIosArrowDown className="w-5 h-5" />
                        )}
                      </button>
                    </h2>
                    <div
                      id={`accordion-flush-body-${index}`}
                      className={`  ${
                        activeIndex === index ? "block" : "hidden"
                      }`}
                      aria-labelledby={`accordion-flush-heading-${index}`}
                    >
                      <div className="px-3 pt-2 text-sm text-justify">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section: Content */}
          <div className="relative">
            <img
              src={personpic}
              alt="Lab"
              className="w-full h-full rounded-b-3xl  lg:rounded-l-none lg:rounded-r-3xl lg:rounded-tr-none  object-cover"
            />
          </div>
        </div>
      </div>
      <section>
        <div className="text-center text-4xl py-6 pt-12 font-Regular px-4 sm:px-6 lg:px-32">
          <h5 className="text-[#3c286b]">The future is here.</h5>
          <h6 className="text-[#c21f28]"> Your future.</h6>
          <p className="text-[#000000] text-center text-[14px] leading-5  lg:max-w-3xl  md:max-w-5xl max-w-full mx-auto mt-4">
            At Apitoria, we don’t just manufacture APIs. We are also pioneering
            the future of pharmaceutical innovation. Joining our team means
            being part of a dynamic ecosystem where your ideas are valued, your
            talents are nurtured, and your potential is limitless. Here’s what
            sets us apart.
          </p>
        </div>
        <div className=" px-4 md:px-28 lg:px-48">
          <div className="flex flex-col justify-center text-black ">
            <div className=" text-black">
              <div id="accordion-flush">
                {accordionData.map((item, index) => (
                  <div key={index}>
                    <h2 id={`accordion-flush-heading-${index}`}>
                      <button
                        type="button"
                        className={`flex items-center transition-all justify-between w-full py-4 px-3 font-medium ${
                          activeIndex === index
                            ? "text-black" // Active state
                            : "text-gray-800" // Non-active state (gray)
                        } border-b border-red-400 border-opacity-60 gap-3`}
                        onClick={() => toggleAccordion(index)}
                      >
                        <h1>{item.title}</h1>
                        {activeIndex === index ? (
                          <IoIosArrowUp className="w-5 h-5 text-red-400" />
                        ) : (
                          <IoIosArrowDown className="w-5 h-5 text-red-400" />
                        )}
                      </button>
                    </h2>
                    <div
                      id={`accordion-flush-body-${index}`}
                      className={`  ${
                        activeIndex === index ? "block" : "hidden"
                      }`}
                      aria-labelledby={`accordion-flush-heading-${index}`}
                    >
                      <div className="px-3 pt-2 text-sm text-justify">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="text-center text-4xl py-6 pt-12 font-Regular px-4 sm:px-6 lg:px-32">
        <div className="leading-5">
            <p className="text-[#000000] text-center text-[14px] leading-5  lg:max-w-3xl  md:max-w-5xl max-w-full mx-auto mt-4">
            Join us in shaping the future of healthcare through our promise of
            </p>
            <p className="text-[#000000] text-center text-[14px] font-bold">Agility, Reliability and Innovation.</p>
        </div>
          <h6 className="text-[#c21f28] mt-4"> What makes Apitoria the place to be.</h6>
        </div>
      </section>
    </section>
  );
};

export default Impect;
