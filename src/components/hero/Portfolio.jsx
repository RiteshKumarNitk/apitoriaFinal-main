import React from 'react';
import img1 from "../../assets/images/capsules.png";
import img2 from "../../assets/images/img-6.png";
import img3 from "../../assets/images/img-7.png";
import img4 from "../../assets/images/img-3.png";
import img5 from "../../assets/images/img-4.png";
import img6 from "../../assets/images/img-5.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const PortfolioSection = () => {
  return (
    <div className="bg-gradient-to-t from-[#402869] to-90% via-[#7F2449] to-[#C21F28] py-16">
      <div className="container mx-auto  px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center md:items-start lg:items-start">
          <div className="lg:w-2/5  px-0 lg:px-5 lg:place-self-center text-white  mb-8 lg:mb-0">
            <p className="text-3xl font-light   lg:w-[50%] xl:w-[50%]">Our diverse portfolio, focussed on your growth</p>
            <h5 className="text-6xl font-light my-6">
              250+ <br />
              molecules
            </h5>
            <button className="mt-4 bg-white text-[#583694] px-4 py-2 rounded-lg">
              <a href="#" className="flex items-center gap-2">
                Complete product list
                <MdKeyboardDoubleArrowRight className='text-black text-[30px]' />

              </a>
            </button>
          </div>
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-transparent p-2 text-white text-start">
                <img src={img1} alt="Antibiotics" className="w-16 h-16  mb-4 rounded-full" />
                <h6 className="text-lg font-semibold text-white mb-2">Antibiotics</h6>
                <div className="h-1 w-16 bg-white mb-4 "></div>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed erat neque.</p>
              </div>
              <div className="bg-transparent  text-white  p-2 text-start">
                <img src={img2} alt="CNS & CVS" className="w-16 h-16  mb-4 rounded-full" />
                <h6 className="text-lg font-semibold text-white mb-2">CNS & CVS</h6>
                <div className="h-1 w-16 bg-white mb-4 "></div>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed erat neque.</p>
              </div>
              <div className="bg-transparent  p-2 text-white text-start">
                <img src={img3} alt="Complex molecules" className="w-16 h-16  rounded-full mb-4" />
                <h6 className="text-lg font-semibold text-white mb-2">Complex molecules</h6>
                <div className="h-1 w-16 bg-white mb-4 "></div>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed erat neque.</p>
              </div>
              <div className="bg-transparent   p-2 text-white text-start">
                <img src={img4} alt="Antidiabetics" className="w-16 h-16  rounded-full mb-4" />
                <h6 className="text-lg font-semibold text-white mb-2">Antidiabetics</h6>
                <div className="h-1 w-16 bg-white mb-4 "></div>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed erat neque.</p>
              </div>
              <div className="bg-transparent   p-2 text-white text-start">
                <img src={img5} alt="Antihistamines" className="w-16 h-16  rounded-full mb-4" />
                <h6 className="text-lg font-semibold text-white mb-2">Antihistamines</h6>
                <div className="h-1 w-16 bg-white mb-4 "></div>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed erat neque.</p>
              </div>
              <div className="bg-transparent   p-2 text-white text-start">
                <img src={img6} alt="Oncology" className="w-16 h-16  rounded-full mb-4" />
                <h6 className="text-lg font-semibold text-white mb-2">Oncology</h6>
                <div className="h-1 w-16 bg-white mb-4 "></div>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed erat neque.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
