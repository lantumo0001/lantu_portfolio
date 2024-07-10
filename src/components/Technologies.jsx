import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Technologies = () => {
  const techArray = [
    { name: "React", proficiency: 90 },
    { name: "Node.js", proficiency: 80 },
    { name: "JavaScript", proficiency: 85 },
    { name: "typescript", proficiency: 70 },
    { name: "CSS", proficiency: 90 },
    { name: "Docker", proficiency: 60 },
    { name: "MongoDB", proficiency: 75 },
  ];

  return (
    <div className="w-full p-5 flex flex-col md:flex-row justify-center md:gap-12 gap-5 items-center z-10">
      {techArray.map((tech, idx) => (
        <TechCircle
          key={idx}
          greenPercentage={tech.proficiency}
          blackPercentage={100 - tech.proficiency}
          techName={tech.name}
        />
      ))}
    </div>
  );
};

const TechCircle = ({ greenPercentage, blackPercentage, techName }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateCircle = async () => {
      await controls.start({
        background: `conic-gradient(#88CE52 0%, #151515 0%)`,
      });

      await controls.start({
        background: `conic-gradient(#88CE52 ${greenPercentage}%, #151515 ${blackPercentage}%)`,
        transition: { duration: 2 },
      });
    };

    animateCircle();
  }, [controls, greenPercentage, blackPercentage]);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <motion.div
        className="w-20 h-20 md:w-20 md:h-20 rounded-full shadow-sm shadow-white"
        style={{ background: `conic-gradient(#88CE52 0%, #151515 0%)` }}
        animate={controls}
      ></motion.div>

      <h4 className=" font-bold text-gray-400 text-lg font-secondary-font">
        {techName}
      </h4>
    </div>
  );
};

export default Technologies;
