import React from "react";
import logo from "../assets/Aditya.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-5">
      {/* Logo and Resume */}
      <div className="flex items-center space-x-4">
        <img className="w-8 sm:w-10" src={logo} alt="logo" />
        <a
          className="text-sm sm:text-base font-semibold underline text-purple-500"
          href="https://drive.google.com/file/d/1pPYz0B6nabnwG7ppqXLsOOTw0TJyjR9b/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>    
            <div className="flex items-center space-x-3 sm:space-x-4 text-xl sm:text-2xl">
        <a href="https://www.linkedin.com/in/aditya-bhure-729882258" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ABaditya07" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        
        <a href="https://www.instagram.com/ab_aditya07/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
