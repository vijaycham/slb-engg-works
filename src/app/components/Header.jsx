"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className=" fixed top-0 left-0 right-0 z-50 p-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-lg md:text-2xl font-bold text-center md:text-left">
          Sri Lakshmi Baalaji engineering works
        </h1>
        {/* Desktop navigation */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          role="button"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-white shadow-md py-4">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
