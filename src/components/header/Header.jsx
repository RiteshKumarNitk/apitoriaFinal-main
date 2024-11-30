import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import apitoria from "../../assets/apitoria.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
    setSearchQuery(""); // Clear the search input when toggling
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const navItems = [
    { name: "Who We Are", href: "#who-we-are" },
    { name: "Our Business", href: "#our-business" },
    { name: "Our Products", href: "#products" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "Careers", href: "#careers" },
    { name: "Contact Us", href: "#contact" },
  ];

  const quickLinks = [
    { name: "Quick Quote", href: "#quick-quote" },
    { name: "Government Contracting", href: "#government-contracting" },
    { name: "News", href: "#news" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTopBarVisible(currentScrollY <= lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <header
        className={`custom-gradient w-full absolute transition-transform duration-300 ${
          isTopBarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="px-4 py-4 flex justify-end items-center">
          <ul className="hidden md:flex space-x-2 text-white text-sm">
            {quickLinks.map((link, index) => (
              <React.Fragment key={index}>
                <li>
                  <a href={link.href} className="hover:underline">
                    {link.name}
                  </a>
                </li>
                {index < quickLinks.length - 1 && <li>|</li>}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Header */}
      <header
        className={`bg-white shadow w-full fixed top-0 transition-transform duration-300 ${
          isTopBarVisible ? "mt-12" : "mt-0"
        }`}
      >
        <div className="px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <img src={apitoria} width={80} height={40} alt="Apitoria logo" />

          {/* Navigation for Larger Screens */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6 text-sm text-gray-700">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-orange-600">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search and Action Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#careers" className="hover:underline text-sm text-gray-300">
              Careers
            </a>
            <a href="#contact" className="hover:underline text-sm text-gray-300">
              Contact Us
            </a>
            <IoSearchOutline
              className="cursor-pointer text-lg text-gray-300"
              onClick={toggleSearch}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col items-start space-y-2 p-4">
              {[...quickLinks, ...navItems].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="p-2 text-gray-700 hover:text-orange-600"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <IoSearchOutline
                  size={20}
                  className="p-2 text-gray-300 hover:text-orange-600"
                  onClick={toggleSearch}
                />
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Search Input */}
      {/* {isSearchVisible && (
        <div className=" absolute w-full bg-white z-40 shadow-lg">
          <div className="px-4 py-2 flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button
              className="ml-2 px-3 py-2 bg-orange-600 text-white rounded"
              onClick={() => alert(`Searching for: ${searchQuery}`)}
            >
              Search
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Header;
