import React from "react";

const AddressInfo = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6 lg:px-12 container">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-transparent p-6 flex flex-col justify-between h-[auto ] hover:shadow-xl hover:rounded-lg transition-shadow"
        >
          <h3 className="text-lg font-bold text-red-600">{card.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AddressInfo;
