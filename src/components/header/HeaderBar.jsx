import React from "react";
import img from "../../assets/images/logo.jpg";
import { AiOutlineClose } from "react-icons/ai";

const HeaderBar = () => {
  return (
    <div>
    {/* Top Header Section */}
    <div className="bg-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-end md:space-x-4 space-y-2 md:space-y-0 py-2 text-sm text-gray-700">
          <a href="" className="hover:underline text-center md:text-left">
            Quick Quote
          </a>
          <span className="hidden md:block">|</span>
          <a href="" className="hover:underline text-center md:text-left">
            Government Contracting
          </a>
          <span className="hidden md:block">|</span>
          <a href="" className="hover:underline text-center md:text-left">
            News
          </a>
        </div>
      </div>
    </div>

    {/* Main Header Section */}
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img src={img} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-800 text-center">
          <li>
            <a href="" className="hover:text-orange-600">
              Who we are
            </a>
          </li>
          <li>
            <a href="" className="hover:text-orange-600">
              Our business
            </a>
          </li>
          <li>
            <a href="" className="hover:text-orange-600">
              Our product
            </a>
          </li>
          <li>
            <a href="" className="hover:text-orange-600">
              Sustainability
            </a>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center">
          <a
            href=""
            className="text-orange-600 font-medium hover:underline text-center"
          >
            Careers
          </a>
          <a href="" className="hover:underline text-center">
            Contact us
          </a>
          <a href="" className="text-gray-600 hover:text-red-600 flex justify-center">
            <AiOutlineClose size={24} />
          </a>
        </div>
      </div>
    </div>
    <hr className="border-t border-gray-300" />
  </div>
  );
};

export default HeaderBar;
