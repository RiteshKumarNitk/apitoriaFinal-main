import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import apitoria from "../../assets/apitoria.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
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
      {/* Top Bar (Hidden on Mobile Screens) */}
      <header
        className={`custom-gradient w-full absolute transition-transform duration-300 ${
          isTopBarVisible ? "translate-y-0" : "-translate-y-full"
        } hidden sm:block`}
      >
        <nav className="px-4 py-2 flex justify-end items-center">
          <ul className="flex space-x-2 text-white text-sm">
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
          isTopBarVisible ? "sm:mt-12 mt-0" : "mt-0"
        }`}
      >
        <div className="px-4 py-4 flex justify-between items-center">
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
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
