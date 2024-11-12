import React from "react";
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
      "The focus of our sustainability efforts at Apitoria is centered around the responsible and sustainable use of natural resources, including energy, water, and waste management",
  },
  {
    id: 2,
    img: img8,
    title: "Sustainable Sourcing",
    description:
      "The focus of our sustainability efforts at Apitoria is centered around the responsible and sustainable use of natural resources, including energy, water, and waste management",
  },
  {
    id: 3,
    img: img9,
    title: "Social Equity",
    description:
      "The focus of our sustainability efforts at Apitoria is centered around the responsible and sustainable use of natural resources, including energy, water, and waste management",
  },
  {
    id: 4,
    img: img10,
    title: "Healthcare Access",
    description:
      "The focus of our sustainability efforts at Apitoria is centered around the responsible and sustainable use of natural resources, including energy, water, and waste management",
  },
  {
    id: 5,
    img: img11,
    title: "Corp. Social Responsibility",
    description:
      "The focus of our sustainability efforts at Apitoria is centered around the responsible and sustainable use of natural resources, including energy, water, and waste management",
  },
  {
    id: 6,
    img: img11,
    title: "Corp. Social Responsibility",
    description:
      "The focus of our sustainability efforts at Apitoria is centered around the responsible and sustainable use of natural resources, including energy, water, and waste management",
  },
  {
    id: 7,
    img: img11,
    title: "Corp. Social Responsibility",
    description:
      "The focus of our sustainability efforts at Apitoria is centered around the responsible and sustainable use of natural resources, including energy, water, and waste management",
  },
];
// import "../../assets/im"
const Business = () => {
  return (
    <section>
      <div className="text-center text-4xl py-6  font-thin">
        <h5 className="text-[#c21f28] font-[26px]">
          In the business of the bigger purpose.
        </h5>
        <h6 className="text-bold font-[26px]">Our ESG goals</h6>
      </div>

      {/* <div className="t-center spacial-btn">
        <button>
          <a href="">Take a look at our progress </a>
        </button>
      </div> */}
      <div className="mx-4 my-8 flex">
        <div className="relative p-12 h-full flex justify-between overflow-x-auto hide-scrollbar">
          {data.map((item, index) => (
            <Card key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
