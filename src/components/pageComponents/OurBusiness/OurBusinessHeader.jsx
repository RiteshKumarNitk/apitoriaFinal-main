import React from "react";
import { Link } from "react-router-dom";
import { MainComponent } from "../Tabs/MainComponent";

const OurBusinessHeader = ({ backgroundImage, breadcrumbs }) => {
  return (
    <section
      className="pt-12 bg-transparent"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100% auto", // Full width, auto height
        backgroundRepeat: "repeat-y", // Repeat vertically
        backgroundPosition: "center top", // Align the background to the top
      }}
    >
      <div className="px-4 sm:px-6 lg:px-32">
        {/* Breadcrumb Section */}
        <div className="text-sm container mt-2 text-gray-500 mb-4">
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              <Link
                to={breadcrumb.link}
                className={`hover:text-gray-700 ${
                  index === breadcrumbs.length - 1 ? "text-[#3c286b]" : ""
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
        {/* your Legacy  */}
        <div className=" px-4 md:px-12 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 md:gap-8 lg:gap-8">
            <div className="grid-cols-1 text-start text-5xl md:py-6 lg:py-6 font-Regular max-w-lg ">
              <p className=" text-[#3c286b]">
                All the capability for the world’s future. And yours too.
              </p>
            </div>
            <div className="grid-cols-1 text-start p-1 md:py-6 lg:py-6 max-w-md">
              <p className="text-lg text-[#c21f28]">
                From a 30+ year legacy, Apitoria is now one of the largest API
                players in the industry.
              </p>
              <p className="text-sm text-black font-normal leading-7">
                Our capabilities span end-to-end, so you have the certainty of
                having every need met. And surpassed. So together, we can ensure
                the future is healthier.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-12 lg:px-12"></div>
      </div>
      <div>
        <MainComponent />
      </div>
    </section>
  );
};

export default OurBusinessHeader;
