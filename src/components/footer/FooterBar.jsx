import React from "react";
import "../../assets/style.css";
import img from "../../assets/images/logo.jpg";
import { FaEnvelope, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa6";
const FooterBar = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="footer py-12 pb-18">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="py-0 md:px-5 px-0  lg:px-5 mb-9 md:mb-0">
            <img src={img} alt="" className="w-28" />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="text-2xl mb-6 md:mb-0">
              <ul>
                <li className="hover:underline">
                  <a href="">Investors</a>
                </li>
                <li className="hover:underline">
                  <a href="">Careers</a>
                </li>
                <li className="hover:underline">
                  <a href="">Media</a>
                </li>
                <li className="hover:underline">
                  <a href="">Partners</a>
                </li>
              </ul>
            </div>
            <div className=" sm:text-xl mb-6 md:mb-0">
              <ul>
                <li className="hover:underline">
                  <a href="">Grant Seekers</a>
                </li>
                <li className="hover:underline">
                  <a href="">Healthcare Professionals</a>
                </li>
                <li className="hover:underline">
                  <a href="">Business to Business</a>
                </li>
                <li className="hover:underline">
                  <a href="">Merchandise</a>
                </li>
              </ul>
            </div>
            <div className="sm:text-xl">
              <ul>
                <li className="hover:underline">
                  <a href="">Privacy Statement</a>
                </li>
                <li className="hover:underline">
                  <a href="">Terms of Use</a>
                </li>
                <li className="hover:underline">
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-end px-0 py-4 text-justify flex flex-col md:flex-row justify-between items-center lg:px-5 lg:py-4">
        <div className="mb-4 md:mb-0">
          <h6 className=" font-bold ">© 2024 Apitoria. All rights reserved</h6>
          <p className="w-full md:w-[80%]">
            This information—including product information—is intended only for
            residents of the United States. The products discussed herein may
            have different labeling in different countries.
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <a
            rel="noopener noreferrer"
            href="#"
            title="Instagram"
            className="flex items-center justify-center w-8 h-8 rounded-full dark:bg-gray-600 dark:text-gray-50"
          >
            <FaInstagram />
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            title="Pinterest"
            className="flex items-center justify-center w-8 h-8 rounded-full dark:bg-gray-600 dark:text-gray-50"
          >
            <FaPinterest />
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            title="Twitter"
            className="flex items-center justify-center w-8 h-8 rounded-full dark:bg-gray-600 dark:text-gray-50"
          >
            <FaTwitter />
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            title="Facebook"
            className="flex items-center justify-center w-8 h-8 rounded-full dark:bg-gray-600 dark:text-gray-50"
          >
            <FaFacebook />
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            title="Gmail"
            className="flex items-center justify-center w-8 h-8 rounded-full dark:bg-gray-600 dark:text-gray-50"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
