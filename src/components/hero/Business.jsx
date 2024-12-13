import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import scroll icons
import Card from "../componentItems/Card";
import img1 from "../../assets/images/img-2.png";
import img8 from "../../assets/images/img-8.png";
import img9 from "../../assets/images/img-9.png";
import img10 from "../../assets/images/img-10.png";
import img11 from "../../assets/images/img-11.png";

const data = [
  {
    id: 1,
    img: img1,
    title: "Responsible Manufacturing",
    description:
      "The focus of our sustainability efforts at Apitoria is centered around the responsible and sustainable use of natural resources, including energy, water, and waste management.",
  },
  {
    id: 2,
    img: img8,
    title: "Sustainable Sourcing",
    description:
      "We ensure the supply chain is built on a foundation of ethics, transparency, & accountability by involving suppliers & partners with shared values.",
  },
  {
    id: 3,
    img: img9,
    title: "Social Equity",
    description:
      "We create a culture that values diversity & promotes a sense of community among our employees by investing in L&D, providing opportunities and ensuring work-life balance.",
  },
  {
    id: 4,
    img: img10,
    title: "Healthcare Access",
    description:
      "Making medication available and affordable to those in need (people with different levels of income) is at the centre of our values.",
  },
  {
    id: 5,
    img: img11,
    title: "Corp. Social Responsibility",
    description:
      "Our company promotes community engagement and empowerment by providing comprehensive social value.",
  },
  {
    id: 6,
    img: img11,
    title: "Effective Governance",
    description:
      "We believe in the need for a governance framework that goes beyond mere compliance and focuses on effectiveness in ensuring ethical and responsible behavior.",
  },
];

const Business = () => {
  const scrollContainerRef = useRef(null);

  // Scroll left function
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="container mx-auto p-4">
      {/* Heading */}
      <div className="text-center text-4xl mt-6 font-Regular">
        <h5 className="text-[#c21f28] font-semibold text-[26px]">
          In the business of the bigger purpose.
        </h5>
        <h6 className="font-bold text-[26px]">Our ESG goals</h6>
      </div>

      {/* Scrollable Cards Section */}
      <div className="relative mx-4 my-6">
        {/* Scroll Icons */}
        {/* <button
          onClick={scrollLeft}
          className="absolute left-20 bottom-0 transform -translate-y-1/2 z-10  p-3  hover:bg-gray-300"
        >
          <FaChevronLeft size={20} />
        </button> */}

        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar"
        >
          {data.map((item, index) => (
            <Card key={index} data={item} index={index} />
          ))}
        </div>

        {/* <button
          onClick={scrollRight}
          className="absolute right-20 bottom-0 transform -translate-y-1/2 z-10  p-3  hover:bg-gray-300"
        >
          <FaChevronRight size={20} />
        </button> */}
      </div>

      {/* Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-[#c21f28] text-white rounded-full hover:bg-red-700 transition">
          <a href="#" className="font-semibold text-lg">
            Take a look at our progress
          </a>
        </button>
      </div>
    </section>
  );
};

export default Business;