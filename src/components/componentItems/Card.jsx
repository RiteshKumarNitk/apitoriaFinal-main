import React from "react";

const Card = ({ data, index }) => {
  if (index % 2 === 0) {
    // even index, render different card
    return (
      <div className="mx-4 pt-11 my-8">
        <div className="relative flex flex-col mt-6 text-gray-700 bg-[#efefef] shadow-md bg-clip-border rounded-2xl rounded-bl-[50px] w-72">
          <div className="relative h-56 overflow-hidden text-white bg-clip-border bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={data.img} alt="card-image" />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-[#c21f28] ">
              {data.title}
            </h5>
            <p className="block font-sans text-base antialiased font-normal text-black leading-relaxed text-inherit">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    // odd index, render same card
    return (
      <div className="mx-4 my-8">
        <div className="relative flex flex-col mt-6 text-gray-700 bg-[#efefef] shadow-md bg-clip-border rounded-2xl rounded-bl-[50px] w-72">
          <div className="relative h-56 overflow-hidden text-white bg-clip-border bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={data.img} alt="card-image" />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-[#c21f28] ">
              {data.title}
            </h5>
            <p className="block font-sans text-base antialiased font-normal text-black leading-relaxed text-inherit">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;