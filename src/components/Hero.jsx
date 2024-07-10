import { AiOutlineArrowUp } from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full bg-transparent md:mt-5 sm:mt-20 flex flex-col md:flex-row gap-5 h-screen justify-between items-center">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0 rounded"
      >
        <source src="/bg-footage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Left side content */}
      <div className="p-5 z-20 text-center md:text-left relative w-full md:w-1/2 ">
        <div>
          <motion.h3
            className="text-2xl text-white font-bold xs:mt-20 lg:my-2 font-primary-font xs:pt-20 md:pt-2 xs:mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hey There!
          </motion.h3>
          <motion.h1
            className="text-4xl text-white font-bold font-primary-font"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I'M LANTUMO,{" "}
            <span className="text-4xl text-secondary font-primary-font">
              FULL STACK{" "}
            </span>
            <br />
          </motion.h1>
          <motion.h1
            className="text-4xl text-secondary font-bold font-primary-font"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            DEVELOPER
          </motion.h1>
        </div>

        <motion.p
          className="text-white text-xl my-12 font-secondary-font"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
        <div className="flex gap-5 w-full justify-center md:justify-start">
          <motion.button className="p-5 bg-primary-900 rounded-full shadow-sm shadow-white">
            <motion.div
              className="p-1 rounded-full shadow-white"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                y: [0, 5, 10],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <AiOutlineArrowUp size={20} className="text-white" />
            </motion.div>
          </motion.button>
          <motion.div
            className="px-4 py-2 bg-transparent mt-12 text-white font-bold my-5 font-primary-font tracking-widest"
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, 5, 10] }}
            transition={{ duration: 0.8 }}
          >
            view my works
          </motion.div>
        </div>
      </div>
      <div className="hidden md:block z-20  relative w-1/2 ">
        <img
          src="/hero-1.jpg"
          alt="hero anime"
          className="h-screen w-full object-cover opacity-40 rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
