import { FaCode, FaReact, FaLayerGroup, FaNodeJs } from "react-icons/fa";

const myServices = [
  {
    id: 1,
    name: "Basic Website Design & Development",
    description:
      "Creating visually appealing and functional websites using basic web technologies.",
    technologies: ["HTML", "CSS", "JavaScript"],
    skills: ["Web Design", "Web Development"],
    icon: FaCode, // Reference to the icon component
  },
  {
    id: 2,
    name: "Dynamic Frontend Development with React",
    description:
      "Developing dynamic and interactive user interfaces using React.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    skills: ["Frontend Development", "React Development"],
    icon: FaReact, // Reference to the icon component
  },
  {
    id: 3,
    name: "Full Stack Development with Next.js",
    description:
      "Building full-stack web applications using Next.js, including both frontend and backend development.",
    technologies: ["Next.js", "React", "Node.js", "JavaScript", "HTML", "CSS"],
    skills: ["Full Stack Development", "Next.js Development"],
    icon: FaLayerGroup, // Reference to the icon component
  },
  {
    id: 4,
    name: "API Development with Node.js",
    description: "Creating robust and scalable APIs using Node.js.",
    technologies: ["Node.js", "Express", "JavaScript"],
    skills: ["Backend Development", "API Development"],
    icon: FaNodeJs, // Reference to the icon component
  },
];

export default myServices;
