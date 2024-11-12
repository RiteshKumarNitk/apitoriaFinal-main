import React from "react";
import labimg from "../../assets/images/lab-img.png";
import labicon from "../../assets/images/img-1.png";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

const OpportunitySection = () => {
  return (
    <section className=" py-5 ">
      <div className="text-center text-4xl py-6  font-thin">
        <h5 className="text-[#3c286b] ">
          Capabilities. Possibilities.
        </h5>
        <h6 className="text-[#c21f28] ">
          All the opportunity, to accelerate
        </h6>
      </div>
      <div className="grid bg-gradient-to-t from-[#402869] to-90% via-[#7F2449] to-[#C21F28] rounded-3xl shadow-xl my-4 max-w-screen-xl mx-auto xl:gap-0 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
          <img src={labimg} className="w-full h-full rounded-l-3xl" alt="mockup" />
        </div>
        <div className="mr-auto px-16 py-10 mt-auto  place-self-center lg:col-span-5">
          <img src={labicon} alt="Lab Icon" className="mb-4 w-32" />
          <div className="my-2 bg-white h-[5px] w-[90px] rounded-2xl"></div>
          <p className="text-white text-4xl text-thin">
            State-of-the-art API R&D centre
          </p>
          <div className="flex  py-3">
            <GoDotFill className="text-2xl text-white" />
            <GoDot className="text-2xl text-white" />
            <GoDot className="text-2xl text-white" />
            <GoDot className="text-2xl text-white" />
            <GoDot className="text-2xl text-white" />
            <GoDot className="text-2xl text-white" />
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto py-9">
  <div className="text-center leading-7 text-xl font-bold">
    <h5 className="text-[#3c286b] text-[24px]">Capabilities. Possibilities.</h5>
    <h6 className="text-[#c21f28] text-[24px]">All the opportunity, to accelerate</h6>
  </div>
  <div className="flex mt-6">
    <div className="lab flex-shrink-0">
      <img className="h-96 object-cover" src={labimg} alt="Lab" />
    </div>
    <div className="text">
      <img src={labicon} alt="Lab Icon" className="mb-4"/>
      <div className="special-1 mb-4"></div>
      <p>State-of-the-art API R&D centre</p>
    </div>
  </div>
</div> */}
    </section>
  );
};

export default OpportunitySection;
