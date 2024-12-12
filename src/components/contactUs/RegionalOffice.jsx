import React from "react";

const RegionalOffice = ({ cards }) => {
  return (
    <>
      <div className="mx-auto pb-6 ">
        <div className="text-lg font-bold text-red-600 pl-0 md:pl-6 lg:pl-12 ">
        Regional Offices
        <hr className="w-16 h-[6px]  my-2 border-3 bg-gray-900" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:px-6 lg:px-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-transparent  flex flex-col justify-between  transition-shadow"
            >
              <p className="text-gray-900 text-sm mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RegionalOffice;
