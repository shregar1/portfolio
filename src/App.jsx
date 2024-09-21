import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { workExperience } from "./constants/WorkExperience.js";
import { techStack } from "./constants/TechStack.js";

function App() {
  return (
    <div className="flex flex-col w-screen items-center justify-center bg-[#1E1E20]">
      <div className="flex flex-col justify-center item w-[90%]">
        <Navbar />
        <Home work_experiences={workExperience}></Home>
        <About tech_stacks={techStack} />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
