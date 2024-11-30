import React from "react";
import img from "../../assets/images/logo.jpg";
import { FaEnvelope, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa6";

const FooterBar = () => {
  const footerLinks = [
    {
      title: "Resources",
      links: [
        { name: "Investors", href: "#Investors" },
        { name: "Careers", href: "#Careers" },
        { name: "Media", href: "#Media" },
        { name: "Partners", href: "#Partners" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Grant Seekers", href: "#Grant_Seekers" },
        { name: "Healthcare Professionals", href: "#Healthcare_Professionals" },
        { name: "Business to Business", href: "#Business_to_Business" },
        { name: "Merchandise", href: "#Merchandise" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Statement", href: "#Privacy Statement" },
        { name: "Terms of Use", href: "#Terms_of_Use" },
        { name: "Contact Us", href: "#Contact_Us" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, title: "Instagram", href: "#Instagram" },
    { icon: <FaPinterest />, title: "Pinterest", href: "#Pinterest" },
    { icon: <FaTwitter />, title: "Twitter", href: "#Twitter" },
    { icon: <FaFacebook />, title: "Facebook", href: "#Facebook" },
    { icon: <FaEnvelope />, title: "Email", href: "#Email" },
  ];

  return (
    <footer className="px-4 sm:px-6 lg:px-8">
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
            <div key={index} className="text-lg md:text-xl mb-6 md:mb-0">
              <ul className="text-center md:text-left">
                {section.links.map((link, idx) => (
                  <li key={idx} className="hover:underline">
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  
    {/* Footer Bottom */}
    <div className="footer-end px-0 py-4 flex flex-col md:flex-row justify-between items-center lg:px-5 lg:py-4">
      {/* Disclaimer Section */}
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <h6 className="font-bold text-sm md:text-base">© 2024 Apitoria. All rights reserved</h6>
        <p className="w-full md:w-[80%] text-xs md:text-sm">
          This information—including product information—is intended only for
          residents of the United States. The products discussed herein may
          have different labeling in different countries.
        </p>
      </div>
      {/* Social Links */}
      <div className="flex items-center space-x-2">
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            rel="noopener noreferrer"
            href={social.href}
            title={social.title}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
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
