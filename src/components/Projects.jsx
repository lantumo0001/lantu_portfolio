import { motion } from "framer-motion";

const Projects = () => {
  // Define project data with images and descriptions
  const projects = [
    {
      id: 1,
      image: "/Screenshot (42).png",
      description:
        "Capture, share, and explore moments with InstaClone! A sleek and modern photo-sharing platform that brings your social experience to life. Snap, filter, and connect just like on Instagram. Share your journey today! 📸✨.",
      githubLink: "https://github.com/lantumo0001/instagram-clone-app",
      demoLink: "https://snap-share-app.vercel.app/",
    },
    {
      id: 2,
      image: "/Screenshot (40).png",
      description:
        "WiseHub is a web-based platform where users can read, listen to their favorite songs, and hang out with friends all in one place. Enjoy seamless access to music and social interaction, making it the perfect hub for entertainment and connection.",
      githubLink: "https://github.com/lantumo0001/wise-hub",
      demoLink: "https://wise-hub.vercel.app",
    },
    {
      id: 3,
      image: "/world-wise.png",
      description:
        "World-Wise is a location-based web application designed to track and visualize travel experiences globally.",
      githubLink: "https://github.com/lantumo0001/world_wise",
      demoLink: "https://world-wise-tawny.vercel.app/",
    },
    {
      id: 4,
      image: "/quote.png",
      description:
        "Create and inspire with our Simple Quote Generator project. This application generates insightful and motivational quotes at the click of a button, offering a moment of inspiration for users",
      demoLink: "https://world-wise-tawny.vercel.app/",
    },
    {
      id: 5,
      image: "/beautiful-soup.png",
      description:
        "A Python web scraper is a tool designed to automatically extract data from websites.",
      githubLink: "https://github.com/lantumo0001/web-scraper",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center my-5 z-10">
      <h3 className="text-white font-light my-5 font-secondary-font">
        My Projects
      </h3>
      <h2 className="text-white font-bold text-3xl uppercase leading-12 tracking-wider">
        My Recent Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-5 mt-5 w-full p-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      id="projects"
    >
      <a href={project.demoLink} target="_blank">
        <img
          src={project.image}
          alt={`Project ${project.id}`}
          className="object-cover w-full h-72"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black to-transparent">
          <p className="text-white text-xl font-secondary-font">
            {project.description}
          </p>
        </div>
      </a>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-gradient-to-t from-transparent to-black p-3">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 mr-2"
          >
            GitHub
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
