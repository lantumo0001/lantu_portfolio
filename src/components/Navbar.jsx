import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ParticlesBackground from "./ParticlesBackground";
import { Link as ScrollLink } from "react-scroll";

import resumePDF from "/resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    g;
    setIsOpen(!isOpen);
  };

  const handleDownloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = resumePDF;
    downloadLink.download = "resume.pdf";
    downloadLink.click();
  };

  return (
    <nav className="flex justify-between items-center w-full p-2 rounded-lg relative z-50 bg-primary-900 shadow-sm shadow-secondary/50">
      {/* left side */}
      <div className="flex gap-2 items-center z-10">
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <motion.div
          className="p-1 rounded-full shadow-sm shadow-white ml-auto bg-primary-700"
          initial={{ scale: 1 }}
          animate={{ rotate: 360 }}
        >
          <img
            src="/logo-no-background.svg"
            alt="logo"
            className="w-20 h-20 object-cover"
          />
        </motion.div>
        <span className="text-white font-bold font-primary-font z-10">
          Lantumo{" "}
        </span>
        <p className="text-secondary z-10">|</p>
        <span className="text-white font-bold font-primary-font z-10">
          Birhanu
        </span>
      </div>

      {/* right side */}
      <div className="hidden md:flex gap-12 z-10 bg-primary-700 rounded-lg p-5">
        <ul className="flex gap-5 text-white font-light items-center font-primary-font">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contacts"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contacts
            </ScrollLink>
          </li>
        </ul>
        <button
          onClick={handleDownloadCV}
          className="bg-secondary rounded-full text-white px-4 py-2 hover:bg-green-300 transition-all duration-200 active:scale-95"
        >
          Download CV
        </button>
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden flex items-center z-10">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="absolute top-full left-0 right-0 bg-primary-900 flex flex-col items-center md:hidden z-20"
        >
          <ul className="flex flex-col gap-5 text-white font-light items-center font-primary-font py-5">
            <li onClick={toggleMenu}>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </ScrollLink>
            </li>
            <li onClick={toggleMenu}>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                About
              </ScrollLink>
            </li>
            <li onClick={toggleMenu}>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Services
              </ScrollLink>
            </li>
            <li onClick={toggleMenu}>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </ScrollLink>
            </li>
            <li onClick={toggleMenu}>
              <ScrollLink
                to="contacts"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contacts
              </ScrollLink>
            </li>
          </ul>
          <button
            onClick={handleDownloadCV}
            className="bg-secondary rounded-full text-white px-4 py-2 mb-5"
          >
            Download CV
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
