import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import labimg from "../../assets/images/lab-img.png";

const BusinessCare = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set the first accordion item as active by default

  const toggleAccordion = (index) => {
    // Keep the first accordion open always
    setActiveIndex(index === activeIndex ? activeIndex : index); 
  };

  const accordionData = [
    {
      title: "What is Flowbite?",
      content: (
        <>
          <p className="mb-2 text-black">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
    {
      title: "Is there a Figma file available?",
      content: (
        <>
          <p className="mb-2 text-black ">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
    {
      title: "What are the differences between Flowbite and Tailwind UI?",
      content: (
        <>
          <p className="mb-2 text-black ">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="bg-transparent">
      {/* Title Section */}
   

      {/* Content Section */}
      <div className="grid bg-[#efebea7e] rounded-3xl shadow-xl max-w-screen-xl mx-auto lg:grid-cols-2 gap-0 overflow-hidden">
        {/* Left Section: Image */}
        <div className="relative">
          <img
            src={labimg}
            alt="Lab"
            className="w-full h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none object-cover"
          />
        </div>

        {/* Right Section: Content */}
        <div className="flex flex-col justify-center px-8 py-8 space-y-4 lg:px-12 lg:py-12">
          <h2 className="text-gray-800 leading-4 w-5/6">
            <p className="text-red-500 text-2xl lg:text-xl font-bold">
              Businesscare Care
            </p>
            <p className="text-[#3c286b] text-lg lg:text-lg font-normal">
              The Continuous monitoring and improving of performance indicators.
            </p>
          </h2>
          <div id="accordion-flush">
            {accordionData.map((item, index) => (
              <div key={index}>
                <h2 id={`accordion-flush-heading-${index}`}>
                  <button
                    type="button"
                    className={`flex items-center transition-all justify-between w-full py-5 font-medium ${
                      activeIndex === index
                        ? "text-black" // Active state
                        : "text-gray-400" // Non-active state (gray)
                    } border-b border-gray-200 gap-3`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h1>{item.title}</h1>
                    {activeIndex === index ? (
                      <LuMinus className="w-5 h-5" />
                    ) : (
                      <LuPlus className="w-5 h-5" />
                    )}
                  </button>
                </h2>
                <div
                  id={`accordion-flush-body-${index}`}
                  className={`${activeIndex === index ? "block" : "hidden"}`}
                  aria-labelledby={`accordion-flush-heading-${index}`}
                >
                  <div className="">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCare;
