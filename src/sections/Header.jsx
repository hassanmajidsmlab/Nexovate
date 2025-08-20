import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Array of menu links
  const menuLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <header className="bg-black py-4 lg:px-[80px] px-7 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-themegreen font-bold text-left lg:text-4xl text-3xl uppercase">
          Nexovate<span className="text-white">.</span>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className="text-white text-2xl lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-10 text-lg font-poppins text-white">
            {menuLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer ${link.name === 'Home' ? 'text-themegreen' : 'hover:text-themegreen transition-colors'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Full-Screen Centered) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black text-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-40 flex items-center justify-center overflow-y-hidden`}
      >
        <IoCloseSharp
          className="fixed top-3 right-6 text-3xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
        <ul className="flex flex-col space-y-6 text-2xl text-center">
          {menuLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer ${link.name === 'Home' ? 'text-themegreen' : 'hover:text-themegreen transition-colors font-poppins'
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </header>
  );
};

export default Header;
