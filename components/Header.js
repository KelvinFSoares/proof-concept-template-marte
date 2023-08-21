import React from "react";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md flex items-center justify-between px-6 py-4">
    <h1 className="text-xl font-bold">Company Name</h1>
    <nav>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-gray-800 hover:text-black">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-black">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-black">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-black">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
