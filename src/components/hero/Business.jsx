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
      "We ensure the supply chain is built on a foundation of ethics, transparency, & accountability by involving suppliers & partners with shared values.",
  },
  {
    id: 3,
    img: img9,
    title: "Social Equity",
    description:
      "We create a culture that values diversity & promotes a sense of community among our employees by investing in the L&D, providing opportunities and ensuring work-life balance.",
  },
  {
    id: 4,
    img: img10,
    title: "Healthcare Access",
    description:
      "Making medication available and affordable to those in need (people with different levels of income) is at the centre of our values",
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
// import "../../assets/im"
const Business = () => {
  return (
    <section className="container">
      <div className="text-center text-4xl py-6  font-thin">
        <h5 className="text-[#c21f28] font-[26px]">
          In the business of the bigger purpose.
        </h5>
        <h6 className="text-bold font-[26px]">Our ESG goals</h6>
      </div>

      <div className="mx-4 my-8 flex">
        <div className="relative p-12 h-full flex justify-between overflow-x-auto scrollbar">
          {data.map((item, index) => (
            <Card key={index} data={item} index={index} />
          ))}
        </div>
      </div>
      <div className="t-center spacial-btn">
        <button>
          <a href="">Take a look at our progress </a>
        </button>
      </div>
    </section>
  );
};

export default Business;
