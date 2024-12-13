import React from "react";
import Card from "../componentItems/Card";
import img1 from "../../assets/lifeatapitoria/conversation.jpg";
import img8 from "../../assets/lifeatapitoria/groupPic.jpg";
import img9 from "../../assets/lifeatapitoria/meeting.jpg";
import img10 from "../../assets/lifeatapitoria/personwithmobile.jpg";
import img11 from "../../assets/lifeatapitoria/meeting2.jpg";
import img12 from "../../assets/lifeatapitoria/workingwoman.jpg";
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
    img: img12,
    title: "Effective Governance",
    description:
      "We believe in the need for a governance framework that goes beyond mere compliance and focuses on effectiveness in ensuring ethical and responsible behavior.",
  },
];
const Business = () => {
  return (
    <section className="container">
      <div className="mx-4 my-0 flex">
        <div className="relative h-full flex justify-between overflow-x-auto scrollbar">
          {data.map((item, index) => (
            <Card key={index} data={item} index={index} />
          ))}
        </div>
      </div>
      <div className="text-center text-4xl py-10 space-y-16  font-Regular px-4 sm:px-6 lg:px-32  text-[#3c286b]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Awards & Accreditations
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Capability Building Programmes
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Work With Us (Careers)
        </h1>
      </div>
    </section>
  );
};

export default Business;
