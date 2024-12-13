import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/pics/logoapitoria.png";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const FooterBar = () => {
  const footerLinks = [
    {
      title: "Resources",
      links: [
        { name: "Investors", to: "/investors" },
        { name: "Careers", to: "/careers" },
        { name: "Media", to: "/media" },
        { name: "Partners", to: "/partners" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Statement", to: "/privacy-statement" },
        { name: "Terms of Use", to: "/terms-of-use" },
        { name: "Contact Us", to: "/contact-us" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaXTwitter />, title: "Twitter", href: "https://twitter.com" },
    { icon: <FaFacebook />, title: "Facebook", href: "https://facebook.com" },
    { icon: <FaLinkedin />, title: "LinkedIn", href: "https://linkedin.com" },
    { icon: <FaInstagram />, title: "Instagram", href: "https://instagram.com" },
    { icon: <FaYoutube />, title: "Youtube", href: "https://youtube.com" },
  ];

  return (
    <footer className="px-4 sm:px-6 lg:px-32">
      {/* Footer Content */}
      <div className="footer py-12 pb-18">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo Section */}
          <div className="py-0 md:px-5 px-0 lg:px-5 mb-9 md:mb-0">
            <img src={img} alt="Apitoria Logo" className="w-20 md:w-28" />
          </div>
          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:space-x-10">
            {footerLinks.map((section, index) => (
              <div
                key={index}
                className={`text-lg md:text-xl mb-6 md:mb-0 ${
                  section.title === "Legal" ? "text-sm lg:text-base" : ""
                }`}
              >
                <ul className="text-center md:text-left">
                  {section.links.map((link, idx) => (
                    <li key={idx} className="hover:underline mb-1">
                      <Link to={link.to}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-end px-0 py-4 flex flex-col md:flex-row justify-between items-center lg:pl-5 lg:pr-0 lg:py-4">
        {/* Disclaimer Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h6 className="font-bold text-sm md:text-base">© 2024 Apitoria. All rights reserved</h6>
          {/* <p className="w-full md:w-[80%] text-xs md:text-sm">
            This information—including product information—is intended only for
            residents of the United States. The products discussed herein may
            have different labeling in different countries.
          </p> */}
        </div>
        {/* Social Links */}
        <div className="flex items-center space-x-2">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              rel="noopener noreferrer"
              href={social.href}
              title={social.title}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white hover:bg-gray-300 transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
