import React from "react";

const AddressInfo = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 py-4 md:p-6 lg:px-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-transparent flex flex-col justify-start  transition-shadow"
        >
          <h3 className="text-lg font-bold text-red-600">{card.title}</h3>
         <hr className="w-16 h-[6px]  my-2 border-3 bg-gray-900" />
          <p className="text-black text-sm mt-2">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AddressInfo;
