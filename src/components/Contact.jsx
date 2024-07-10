import {
  AiOutlineArrowUp,
  AiOutlineContacts,
  AiOutlineEdit,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMedium,
} from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_een0121",
        "template_0ucxqoy",
        form.current,
        "t5vXCfwgAKl7xkgqn"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.error("Failed to send the message.");
        }
      );
  };

  return (
    <div
      className="relative w-full flex justify-center flex-col items-center my-5 z-10"
      id="contacts"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0 rounded"
      >
        <source src="/49254-459186555_small.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3 className="text-white font-light my-5 z-10">Contact</h3>
      <h2 className="text-white font-bold text-3xl uppercase leading-12 tracking-wider z-10">
        Feel Free To Contact
      </h2>
      <div className="flex flex-col md:flex-row justify-center p-5 gap-12 w-full my-5 items-center z-10">
        {/* left side */}
        <div className="">
          <button className="p-5 bg-primary-900 rounded-full shadow-sm shadow-white">
            <AiOutlineArrowUp size={20} className="text-white" />
          </button>
          <div className="border-b-2 border-gray-400 py-5">
            <h2 className="text-2xl font-semibold text-white capitalize mt-5">
              Let's Work Together
            </h2>
            <p className="font-light text-white opacity-50 mt-5">
              Ready to take your projects to the next level? Let's create
              something amazing together.
              <br />
              Get in touch today and let's start building your vision.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-white capitalize mt-5">
              Follow me{" "}
            </h2>
            <div className="flex gap-5">
              <div className="bg-primary-900 shadow-sm shadow-gray-400 p-2 rounded-full hover:scale-105 active:scale-95">
                <AiOutlineInstagram
                  className="text-white text-2xl font-bold"
                  size={20}
                />
              </div>
              <div className="bg-primary-900 shadow-sm shadow-gray-400 p-2 rounded-full hover:scale-105 active:scale-95">
                <AiOutlineLinkedin
                  className="text-white text-2xl font-bold"
                  size={20}
                />
              </div>
              <div className="bg-primary-900 shadow-sm shadow-gray-400 p-2 rounded-full hover:scale-105 active:scale-95 ">
                <AiOutlineMedium
                  className="text-white text-2xl font-bold"
                  size={20}
                />
              </div>
              <div className="bg-primary-900 shadow-sm shadow-gray-400 p-2 rounded-full hover:scale-105 active:scale-95">
                <BiLogoTelegram
                  className="text-white text-2xl font-bold"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="bg-primary-900 p-5 rounded-2xl flex flex-col justify-center items-start py-5">
          <h2 className="uppercase text-2xl text-white p-5 ">Get in touch </h2>
          <form
            className="flex flex-col gap-5 w-96 p-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex justify-between items-center border-b-2 border-gray-400 p-5 ">
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="bg-primary-900 rounded text-white opacity-50 focus:border-none focus:outline-none"
              />
              <AiOutlineContacts className="text-white " size={20} />
            </div>
            <div className="flex justify-between items-center border-b-2 border-white p-5">
              <input
                type="email"
                name="email"
                placeholder="Enter your email "
                className="bg-primary-900 rounded text-white opacity-50 focus:border-none focus:outline-none"
              />
              <AiOutlineMail className="text-white " size={20} />
            </div>
            <div className="flex justify-between items-center border-b-2 border-white p-5 ">
              <input
                type="text"
                name="message"
                placeholder="Write message..."
                className="bg-primary-900 rounded text-white opacity-50 focus:border-none focus:outline-none"
              />
              <AiOutlineEdit className="text-white " size={20} />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="text-primary-900 text-bold uppercase text-md w-full bg-secondary rounded-lg p-2 hover:bg-green-300 transition-all duration-200 active:scale-95 "
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
