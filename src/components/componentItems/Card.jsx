import React from "react";

const Card = ({ data, index }) => {
  if (index % 2 === 0) {
    // even index, render different card
    return (
      <div className="mx-4 pt-11 my-8">
        <div className="relative flex flex-col mt-6 text-gray-700 bg-[#e3dfde] bg-clip-border rounded-2xl rounded-bl-[50px] w-72 overflow-hidden">
          <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
            <img src={data.img} alt="card-image" className="object-cover w-full h-full" />
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
        <div className="relative flex flex-col mt-6 text-gray-700 bg-[#e3dfde] bg-clip-border rounded-2xl rounded-bl-[50px] w-72 overflow-hidden">
          <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
            <img src={data.img} alt="card-image" className="object-cover w-full h-full" />
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
