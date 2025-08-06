// components/layout/Header.tsx

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full shadow-md bg-white p-4 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
      <div className="text-xl font-bold text-blue-600">🏡 DreamStay</div>

      <nav className="flex gap-4 flex-wrap text-sm font-medium text-gray-600">
        <a href="#">Rooms</a>
        <a href="#">Mansions</a>
        <a href="#">Countryside</a>
        <a href="#">Beach Houses</a>
      </nav>

      <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 border rounded-md"
        />
        <div className="flex gap-2">
          <button className="px-4 py-1 text-sm text-white bg-blue-600 rounded-md">Sign In</button>
          <button className="px-4 py-1 text-sm text-blue-600 border border-blue-600 rounded-md">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
