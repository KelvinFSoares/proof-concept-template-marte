import React from "react";

const Header = () => (
  <header className="flex items-center justify-between bg-gray-900 p-4">
    <img
      src="https://source.unsplash.com/random"
      alt="Company Logo"
      className="w-12 h-12 rounded-full"
    />
    <h1 className="text-white text-lg font-semibold ml-2">Company Name</h1>
  </header>
);

export default Header;
