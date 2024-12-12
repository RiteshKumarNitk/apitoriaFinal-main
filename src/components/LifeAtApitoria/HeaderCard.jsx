import React from "react";
import { Link } from "react-router-dom";
import apitorialogo from "../../assets/pics/logoapitorialogo.png";
import personpic from "../../assets/lifeatapitoria/lab.jpg"
const HeaderCard = ({
  backgroundImage,
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

          {/* Overlay Logo */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#402869] via-[#7F2449] to-[#C21F28] opacity-45 pointer-events-none"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={apitorialogo} // Replace 'logoImage' with the path to your logo image
              alt="Logo"
              className="w-24 h-24 lg:w-60 lg:h-36 object-contain"
            />
          </div>
        </div>

        <div className="grid bg-[#efebea7e]  rounded-3xl shadow-xl max-w-screen-xl mx-auto lg:grid-cols-2 gap-0  overflow-hidden mt-12">
          {/* Left Section: Image */}
          <div className="relative">
            <img
            src={personpic}
              alt="Lab"
              className="w-full h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none  object-cover"
            />
          </div>

          {/* Right Section: Content */}
          <div className="flex flex-col justify-center px-8 py-8 space-y-8 lg:px-12 lg:py-12 bg-gradient-to-t from-[#402869] via-[#7F2449] to-[#C21F28] text-white ">
            <div className="w-5/6">
              <h2 className="text-2xl lg:text-4xl font-thin  leading-snug  ">
                A culture so inclusive, so possibilities are limitless.
              </h2>
              <h2 className="text-md lg:text-md font-light mt-4 leading-snug  ">
                At Apitoria, an inspiring, inclusive and positive culture lies
                at the core of our system. The essence of who we are. Built
                entirely on integrity, collaboration, and innovation. It’s not
                just about what we do, but about how we do it.
              </h2>
              <div className="space-y-3 ">
                <p className="">Every voice is heard.</p>
                <hr className="h-px border-0 bg-gray-100 opacity-50" />
                <p className="">Through agility.</p>
                <hr className="h-px border-0 bg-gray-100 opacity-50" />
                <p className="">Every individual is empowered.</p>
                <hr className="h-px border-0 bg-gray-100 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderCard;
