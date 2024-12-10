import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const MainNav = ({ navItems, navItem2, isSearchOpen, toggleSearch }) => {
  return (
    <div className="px-4 py-4 flex justify-between items-center container">
      {/* Navigation for Larger Screens */}
      <nav className="hidden md:flex justify-between">
        <ul className="flex space-x-6 text-gray-700">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-red-600">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-row">
        <ul className="flex items-center flex-row text-gray-700 gap-4 hidden sm:flex">
          {navItem2.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <a href={item.href} className="hover:text-red-600">
                  {item.name}
                </a>
              </li>
              {index < navItem2.length - 1 && <li>|</li>}
            </React.Fragment>
          ))}
        </ul>

        {/* Search Icon or Search Box */}
        {isSearchOpen ? (
          <div className="flex items-center border border-gray-300 rounded px-2 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="text-sm outline-none flex-grow"
            />
            <button onClick={toggleSearch}>
              <AiOutlineClose size={20} className="text-gray-700" />
            </button>
          </div>
        ) : (
          <button onClick={toggleSearch} aria-label="Open Search">
            <IoSearchOutline size={24} className="text-gray-700" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MainNav;
