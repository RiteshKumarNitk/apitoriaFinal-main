import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = ({ isOpen, toggleSearch, isSearchOpen, navItems, quickLinks, navItem2 }) => {
  if (!isOpen) return null;

  return (
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
            <IoSearchOutline size={24} className="text-gray-700" />
          </button>
        )}
      </div>
      <ul className="flex flex-col items-start space-y-2 p-4">
        {[...quickLinks, ...navItems].map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="p-2 text-gray-700 hover:text-red-600"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col items-start space-y-2 p-4">
        {navItem2.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="hover:text-red-600">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
