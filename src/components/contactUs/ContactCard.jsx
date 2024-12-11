import React from "react";

const ContactCard = ({ backgroundImage, title, description, cards, overlayImage }) => {
  return (
    <section
      className="pt-12 bg-transparent"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="px-4 sm:px-6 lg:px-32">
        {/* Title Section */}
        <div className="text-sm container mt-2 text-gray-500 mb-4">
          <a href="#" className="hover:text-gray-700">
            Home
          </a>{" "}
          &gt; <span>Contact Us</span>
        </div>

        {/* Content Section */}
        <div className="bg-[#efebea7e] rounded-3xl shadow-xl mx-auto overflow-hidden max-w-screen-2xl relative">
          {/* Image */}
          <img
            src={overlayImage}
            alt="Overlay"
            className="w-full h-64 lg:h-[600px] object-cover rounded-t-3xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-start justify-center">
            <div className="px-6 py-3 text-center">
              <h1 className="text-white text-2xl lg:text-4xl font-light">{title}</h1>
              <p className="text-black text-lg lg:text-lg font-light max-w-3xl">{description}</p>
            </div>
          </div>
        </div>

        {/* Dynamic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4 md:p-6 lg:px-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#efebea7e] shadow-lg rounded-2xl p-6 flex flex-col justify-between h-[250px] hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-bold text-red-600">{card.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
              <a
                href={card.link}
                className="text-red-600 font-semibold mt-4 inline-flex items-center"
              >
                Learn more <span className="ml-2">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
