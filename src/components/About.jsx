const About = () => {
  return (
    <div
      className="bg-primary-700 w-full p-5 flex flex-col md:flex-row gap-6 md:gap-12 md:justify-start my-5 z-10 justify-center items-center"
      id="about"
    >
      {/*  left side  */}
      <img
        src="/ln2.png"
        className="object-fit h-100 w-96 object-cover filter grayscale bg-center rounded"
        alt="About Me" // Added alt text for accessibility
      />
      {/* right side  */}
      <div className="flex flex-col gap-5 md:w-1/2 w-full justify-start items-start">
        <h3 className="text-white font-light opacity-50 font-secondary-font">
          About Me
        </h3>
        <h2 className="text-white font-bold text-4xl leading-6 tracking-widest uppercase">
          About Me in 10 <br />
        </h2>
        <h2 className="text-white font-bold text-4xl leading-5 tracking-widest uppercase">
          seconds
        </h2>
        <p className="font-light text-pretty text-white opacity-50 mt-2 font-primary-font">
          I'm a{" "}
          <span className="text-secondary font-bold font-primary-font">
            skilled software developer
          </span>{" "}
          with experience in{" "}
          <span className="text-secondary font-bold font-secondary-font">
            TypeScript
          </span>{" "}
          and{" "}
          <span className="text-secondary font-bold font-secondary-font">
            JavaScript
          </span>
          , and expertise in frameworks like{" "}
          <span className="text-secondary font-bold font-secondary-font">
            React
          </span>
          ,{" "}
          <span className="text-secondary font-bold font-secondary-font">
            Node.js
          </span>
          , and{" "}
          <span className="text-secondary font-bold font-secondary-font">
            Next.js
          </span>
          .
        </p>
        <p className="font-light text-pretty text-white opacity-50 mt-2 font-secondary-font">
          I'm a <span className="text-secondary font-bold">quick learner</span>{" "}
          and collaborate closely with clients to create{" "}
          <span className="text-secondary font-bold">efficient</span>,{" "}
          <span className="text-secondary font-bold">scalable</span>, and{" "}
          <span className="text-secondary font-bold">
            user-friendly solutions
          </span>{" "}
          that solve real-world problems.
        </p>
        <p className="font-light text-pretty text-white opacity-50 mt-2 font-secondary-font">
          Let's work together to bring your{" "}
          <span className="text-secondary font-bold">ideas to life</span>! I
          have a passion for{" "}
          <span className="text-secondary font-bold">technology</span> and am
          always eager to{" "}
          <span className="text-secondary font-bold">learn new things</span> and
          take on new challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
