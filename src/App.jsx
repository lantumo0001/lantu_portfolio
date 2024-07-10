import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Technologies from "./components/Technologies";
function App() {
  return (
    <>
      <div className=" w-full mx-auto container z-10">
        <Navbar />
        <Hero />
        <Service />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
