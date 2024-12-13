import React from "react";
import { Link } from "react-router-dom";

const OurProducts = ({
  backgroundImage,
  overlayImage,
  breadcrumbs,
  products,
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
        {/* Breadcrumb Section */}
        <div className="text-sm container mt-2 text-gray-500 mb-4">
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              <Link
                to={breadcrumb.link}
                className={`hover:text-gray-700 ${
                  index === breadcrumbs.length - 1 ? "text-black" : ""
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
        {/* Main Content Header */}
        <div className="text-center text-4xl py-6 pt-12 font-Regular">
          <p className="text-[#c21f28]">
            Our Products. 
            <span className="text-[#3c286b]"> Our future.</span>
          </p>
        </div>

        {/* Main Content Section */}
        <div className="h-auto rounded-3xl mx-auto max-w-screen-xl relative">
          {/* Overlay Image */}
          <img
            src={overlayImage || "placeholder.jpg"}
            alt="Overlay"
            className="w-full h-64 lg:h-[600px] object-cover rounded-3xl "
          />

          {/* Features Section */}
          <div className="relative px-6 -mt-24">
            <section className="bg-gradient-to-r from-[#3c286b] via-[#c21f28] to-[#c21f28] bg-opacity-20 text-white py-8 px-6 sm:px-10 lg:px-16 rounded-2xl shadow-lg max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center">
                {/* Left Content - 25% */}
                <div className="col-span-1">
                  <h2 className="text-3xl sm:text-3xl md:text-3xl font-bold">
                    250+ molecules 
                  </h2>
                    <p className="font-thin text-white text-3xl sm:text-3xl md:text-3xl">
                        across a diversified portfolio
                    </p>
                </div>

                {/* Right Content - 75% */}
                <div className="col-span-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-8 h-8 md:w-12 md:h-12 lg:h-12 lg:w-12 mb-4 "
                      />
                      <h3 className="text-sm md:text-md lg:text-sm font-normal">
                        {product.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        <div className="mt-12"> 
          <div className="text-black font-extralight text-center">Scroll to explore</div>
          <div className="m-auto h-[80px] w-[1px] bg-black mt-[10px]"></div>    
        </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
