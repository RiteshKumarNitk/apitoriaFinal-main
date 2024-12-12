import React from "react";
import { Link } from "react-router-dom";
const ContactCard = ({
  backgroundImage,
  title,
  description,
  cards,
  overlayImage,
  breadcrumbs,
}) => {
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
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              <Link
                to={breadcrumb.link}
                className={`hover:text-gray-700 ${
                  index === breadcrumbs.length - 1 ? "text-black " : ""
                }`}
              >
                {breadcrumb.text}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2">&gt;</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Content Section */}
        <div className="bg-[#efebea7e] rounded-3xl shadow-xl mx-auto overflow-hidden max-w-screen-3xl relative">
          {/* Image */}
          <img
            src={overlayImage}
            alt="Overlay"
            className="w-full h-64 lg:h-[600px] object-cover rounded-t-3xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-start justify-center">
            <div className="px-6 py-3 text-center">
              <h1 className="text-white text-2xl lg:text-4xl font-light">
                {title}
              </h1>
              <p className="text-black text-lg lg:text-lg font-light max-w-3xl">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Cards */}
        <div className="flex flex-wrap justify-start gap-6 p-4 md:px-6 lg:px-12 xl:px-18">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#efebea7e] shadow-lg rounded-2xl p-6 flex flex-col justify-between h-[250px] hover:shadow-xl transition-shadow overflow-hidden w-full sm:w-[48%] md:w-[40%] lg:w-[25%]"
            >
              <h3 className="text-lg font-bold text-red-600 max-w-[70%]">
                {card.title}
              </h3>
              <hr className="w-16 h-[6px] my-2 border-3 bg-gray-900" />
              <p className="text-gray-600 text-sm mt-2 overflow-y-auto">
                {card.description}
              </p>
              <a
                href={card.link}
                className="text-red-600 font-semibold mt-4 transition-all duration-300 ease-in-out inline-flex items-center group"
              >
                Learn more
                <span className="ml-2 group-hover:ml-4 transition-all duration-300 ease-in-out">
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
