import React from "react";

const TopBar = ({ isVisible, quickLinks }) => {
  return (
    <header
      className={`custom-gradient w-full absolute transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } hidden sm:block`}
    >
      <nav className="px-4 py-4 flex justify-end items-center container">
        <ul className="flex space-x-2 text-white text-sm gap-3">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
