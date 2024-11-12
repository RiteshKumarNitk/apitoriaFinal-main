import React from 'react'
import img1 from "../../assets/images/img-2.png"
import img8 from "../../assets/images/img-8.png"
import img9 from "../../assets/images/img-9.png"
import img10 from "../../assets/images/img-10.png"
import img11 from "../../assets/images/img-11.png"

const CardOne = () => {
  return (
    <div>
      <div className="relative p-12 h-full  flex justify-between  overflow-x-auto  "  >
        <div className=" bg-[#eeeceb] w-1/6 rounded-t-xl rounded-br-xl rounded-bl-4xl">
          <img src={img1} alt="" />
          <div className="p-5">
            <h5 className="text-[#c21f28] text-2xl">Responsible Manufacturing</h5>
            <p>
              The focus of our sustainability efforts at Apitoria is centered
              around the responsible and sustainable use of natural resources,
              including energy, water, and waste management
            </p>
          </div>
        </div>

        <div className="card bg-[#eeeceb] w-1/6  rounded-t-xl rounded-br-xl rounded-bl-4xl">
          <img src={img8} alt="" />
          <div className="p-5">
            <h5 className="text-[#c21f28] text-2xl">Sustainable Sourcing</h5>
            <p>
              The focus of our sustainability efforts at Apitoria is centered
              around the responsible and sustainable use of natural resources,
              including energy, water, and waste management
            </p>
          </div>
        </div>

        <div className=" bg-[#eeeceb] w-1/6 rounded-t-xl rounded-br-xl rounded-bl-4xl ">
          <img src={img9} alt="" />
          <div className="p-5">
            <h5 className="text-[#c21f28] text-2xl">Social Equity</h5>
            <p>
              The focus of our sustainability efforts at Apitoria is centered
              around the responsible and sustainable use of natural resources,
              including energy, water, and waste management
            </p>
          </div>
        </div>

        <div className=" bg-[#eeeceb] w-1/6 rounded-t-xl rounded-br-xl rounded-bl-4xl">
          <img src={img10} alt="" />
          <div className="p-5">
            <h5 className="text-[#c21f28] text-2xl">Healthcare Access</h5>
            <p>
              The focus of our sustainability efforts at Apitoria is centered
              around the responsible and sustainable use of natural resources,
              including energy, water, and waste management
            </p>
          </div>
        </div>
        <div className=" bg-[#eeeceb] w-1/6 rounded-t-xl rounded-br-xl rounded-bl-4xl">
          <img src={img11} className="w-full h-48 object-cover rounded-t-xl" alt="" />
          <div className="p-5">
            <h5 className="text-[#c21f28] text-2xl">Corp. Social Responsibility</h5>
            <p>
              The focus of our sustainability efforts at Apitoria is centered
              around the responsible and sustainable use of natural resources,
              including energy, water, and waste management
            </p>
          </div>
        </div>

        {/* <div className="slider d-flex sb align-center">
          <i className="bi bi-chevron-left"></i>
          <div className="outer-line">
            <div className="slide-line"></div>
          </div>
          <i className="bi bi-chevron-right"></i>
        </div> */}
      </div>
    </div>
  )
}

export default CardOne
