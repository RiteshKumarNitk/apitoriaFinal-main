import React from "react";
import labimg from "../../../assets/images/lab-img.png";
import bg2 from "../../../assets/pics/bg2.png";
import { Link } from "react-router-dom";
const PurposePage = ({ breadcrumbs }) => {
  return (
    <section
      className="pt-12 bg-transparent "
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
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

        <div className="text-center">
          <h5 className="text-4xl text-[#3c286b] font-light mb-8">
            Our Purpose
          </h5>
        </div>

        {/* Content Section */}
        <div className="grid bg-[#efebea7e]  rounded-3xl shadow-xl max-w-screen-xl mx-auto lg:grid-cols-2 gap-0  overflow-hidden">
          {/* Left Section: Image */}
          <div className="relative">
            <img
              src={labimg}
              alt="Lab"
              className="w-full h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none  object-cover"
            />
          </div>

          {/* Right Section: Content */}
          <div className="flex flex-col justify-center px-8 py-8 space-y-8 lg:px-12 lg:py-12">
            <h2 className="text-2xl lg:text-4xl font-light text-gray-800 leading-snug w-5/6">
              <span className="text-[#3c286b] ">
                Our purpose is to be your API partner,
              </span>
              <br />
              <span className="text-red-500">
                in taking good health to the world.
              </span>
            </h2>

            <div className="space-y-3 ">
              <div>
                <p className="text-gray-600">
                  <span className="text-[#C7292E] font-semibold ">
                    Through reliability.
                  </span>
                  Ensuring consistent supply and compliances. Making sure your
                  business objectives are met.
                </p>
              </div>
              <hr className="h-px   border-0 bg-gray-700" />
              <div>
                <p className="text-gray-600">
                  <span className="text-[#C7292E] font-semibold ">
                    Through agility.
                  </span>
                  By catering to quick requirements, with quick turnaround
                  times. So you can achieve.
                </p>
              </div>

              <hr className="h-px   border-0 bg-gray-700" />
              <div>
                <p className="text-gray-600">
                  <span className="text-[#C7292E] font-semibold ">
                    Through innovation.
                  </span>
                  With our chemical and production capabilities. To consistently
                  push boundaries.
                </p>
              </div>
            </div>

            <p className="text-gray-800 font-semibold">
              So together, we can accelerate good health.
              <br />
              While putting you at the forefront of it all.
            </p>
          </div>
        </div>
        <div className="text-center text-4xl py-6 pt-12 font-Regular">
          <h5 className="text-[#3c286b]">Driven by our Values.</h5>
          <h6 className="text-[#c21f28]">And the greater good</h6>
        </div>
      </div>
    </section>
  );
};

export default PurposePage;
