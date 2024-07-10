import { AiOutlineMail } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center my-5 p-5 bg-primary-900 z-10">
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start ">
        {/* logo */}
        <div className="gap-5 justify-center items-center hidden md:flex">
          <img
            src="/logo-no-background.svg"
            alt="logo"
            className="w-20 h-20 object-cover"
          />
          <span className="text-white font-bold">Lantumo </span>{" "}
          <p className="text-secondary">|</p>{" "}
          <span className="text-white font-bold">Birhanu</span>
        </div>
        {/* sitemap */}
        <div className="flex flex-col hidden md:flex">
          <h2 className="text-white font-bold text-2xl font-primary-font">
            Sitemap
          </h2>
          <ul className="flex flex-col gap-5 text-white font-light items-center font-secondary-font">
            <li>
              <ScrollLink
                to="#"
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
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        {/* contact information */}
        <div className="flex flex-col gap-5 justify-start items-start w-full md:w-1/4 mb-5">
          <h2 className="text-white font-bold text-2xl font-primary-font">
            Contact Info
          </h2>
          <p className="text-white font-light font-secondary-font">
            Hawassa , Ethiopia
          </p>
          <p className="text-white font-light font-secondary-font">
            +251 9459458
          </p>
        </div>
        {/* news letter*/}
        <div className="flex flex-col gap-5 justify-start items-start w-full md:w-1/4 ">
          <h2 className="text-white font-bold text-2xl font-primary-font">
            Newsletter
          </h2>
          <form className="flex justify-between items-center border-b-2 border-white p-5 w-full">
            <input
              type="email"
              name="email"
              placeholder="enter your email "
              className="bg-primary-900 rounded text-white opacity-50 focus:border-none focus:outline-none w-full"
            />
            <i>{<AiOutlineMail className="text-white " size={20} />}</i>
          </form>
          <button
            type="submit"
            className="text-primary-900 bg-secondary p-2 rounded-lg mt-2 w-full hover:bg-green-300 transition-all duration-200 active:scale-95"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full mt-0">
        <div className="w-full h-[1px] bg-white opacity-50 my-5"></div>
        <p className="text-white font-light">
          copyright{" "}
          <span className="text-secondary font-secondary-font">
            &copy; {2024}
          </span>{" "}
          by lantumo All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
