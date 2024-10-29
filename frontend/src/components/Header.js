import React from "react";

function Header() {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 flex items-center">
        <div className="text-2xl font-bold">My Website</div>
        <ul className="ml-auto flex gap-6">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">About Us</li>
          <li className="cursor-pointer hover:text-gray-300">Contact Us</li>
        </ul>
      </nav>
      <div className="h-5"></div> 
    </>
  );
}

export default Header;
