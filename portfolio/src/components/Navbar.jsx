import React from "react";
import logo from "../assets/Aditya.jpg";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaCode } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-5">
      {/* Logo and Resume */}
      <div className="flex items-center space-x-4">
        <img className="w-8 sm:w-10" src={logo} alt="logo" />
        <a
          className="text-sm sm:text-base font-semibold underline text-purple-500"
          href="https://drive.google.com/file/d/1F9aAaobl0Z_BnA2_bHB1w8rwy-qSDVdh/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      {/* Social Icons */}
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
        <a href="https://www.kaggle.com/adityabhure07" target="_blank" rel="noopener noreferrer">
          <SiKaggle />
        </a>
        <a href="https://x.com/ab_aditya07" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://leetcode.com/u/adityabhure63/" target="_blank" rel="noopener noreferrer">
          <FaCode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
