import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import apitoria from "../../assets/apitoria.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };
  const navItems = [
    { name: "Who We Are", to: "/who-we-are" },
    { name: "Our Business", to: "/our-business" },
    { name: "Our Products", to: "/products" },
    { name: "Sustainability", to: "/sustainability" },
  ];

  const quickLinks = [
    { name: "Quick Quote", to: "/quick-quote" },
    { name: "Government Contracting", to: "/government-contracting" },
    { name: "News", to: "/news" },
  ];

  const navItem2 = [
    { name: "Media", to: "/media" },
    { name: "Careers", to: "/careers" },
    { name: "Contact Us", to: "/contact-us" },
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
    <div className="fixed top-0 left-0 right-0 z-50 ">
      {/* Top Bar (Hidden on Mobile Screens) */}
      <header
        className={`custom-gradient w-full absolute transition-transform duration-300 ${
          isTopBarVisible ? "translate-y-0" : "-translate-y-full"
        } hidden sm:block`}
      >
        <nav className="px-4 py-4 flex justify-end items-center container">
          <ul className="flex space-x-2 text-white text-sm gap-3">
            {quickLinks.map((link, index) => (
              <React.Fragment key={index}>
                <li>
                  <Link to={link.to} className="hover:underline">
                    {link.name}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Header */}
      <header
        className={`bg-white shadow w-full fixed top-0  transition-transform duration-300 ${
          isTopBarVisible ? "sm:mt-12 mt-0" : "mt-0"
        }`}
      >
        <div className="px-4 py-4 flex justify-between items-center container">
          {/* Logo */}
          <Link to="/">
            <img src={apitoria} width={80} height={40} alt="Apitoria logo" />
          </Link>
          {/* Navigation for Larger Screens */}
          <nav className="hidden md:flex justify-between">
            <ul className="flex space-x-6 text-gray-700">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.to} className="hover:text-red-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-row">
            <ul
              className={`duration-300 flex items-center flex-row text-gray-700 gap-4 hidden sm:flex`}
            >
              {navItem2.map((item, index) => (
                <React.Fragment key={index}>
                  <li>
                    <Link to={item.to} className="hover:text-red-600">
                      {item.name}
                    </Link>
                  </li>
                  {index < navItem2.length - 1 && <li>|</li>}
                </React.Fragment>
              ))}

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
                  <IoSearchOutline
                    size={24}
                    className="text-gray-700"
                    style={{ maxWidth: "40px" }}
                  />
                </button>
              )}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
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
            <div className="flex justify-center py-2">
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
                  <IoSearchOutline
                    size={24}
                    className="text-gray-700"
                    style={{ maxWidth: "40px" }}
                  />
                </button>
              )}
            </div>
            <ul className="flex flex-col items-start space-y-2 p-4">
              {[...quickLinks, ...navItems].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="p-2 text-gray-700 hover:text-red-600"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-row justify-between gap-5 py-3 px-5">
              {navItem2.map((item, index) => (
                <React.Fragment key={index}>
                  <li>
                    <Link to={item.to} className="hover:text-red-600">
                      {item.name}
                    </Link>
                  </li>
                </React.Fragment>
              ))}
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
