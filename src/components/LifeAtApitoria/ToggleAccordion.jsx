import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const accordionDataTwo = [
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
  

const ToggleAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  

  return (
    <div className="px-4 sm:px-6 md:px-20 lg:px-28 xl:px-48">
      <div className="flex flex-col justify-center text-black">
        <div className="text-black">
          <div id="accordion-flush">
            {accordionDataTwo.map((item, index) => (
              <div key={index}>
                <h2 id={`accordion-flush-heading-${index}`}>
                  <button
                    type="button"
                    className={`flex items-center justify-between w-full py-4 px-3 md:py-5 md:px-6 lg:py-6 font-medium transition-all ${
                      activeIndex === index
                        ? "text-black" // Active state
                        : "text-gray-800" // Non-active state
                    } border-b border-red-400 border-opacity-60 gap-3`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h1 className="text-sm md:text-base lg:text-lg xl:text-xl">
                      {item.title}
                    </h1>
                    {activeIndex === index ? (
                      <IoIosArrowUp className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                    ) : (
                      <IoIosArrowDown className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                    )}
                  </button>
                </h2>
                <div
                  id={`accordion-flush-body-${index}`}
                  className={`${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                  aria-labelledby={`accordion-flush-heading-${index}`}
                >
                  <div className="px-3 md:px-6 lg:px-8 py-2 md:py-4 text-sm md:text-base lg:text-lg text-justify">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleAccordion;
