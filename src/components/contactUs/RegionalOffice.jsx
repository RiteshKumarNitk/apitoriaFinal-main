import React from "react";

const RegionalOffice = ({ cards }) => {
  return (
    <>
      <div className="container px-4">
        <h3 className="text-lg font-bold text-red-600   lg:px-24 ">
          hello
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-0 pb-0 md:p-6 lg:px-12 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-transparent p-6 flex flex-col justify-between h-[auto ] hover:shadow-xl hover:rounded-lg transition-shadow"
            >
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RegionalOffice;
