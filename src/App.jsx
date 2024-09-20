import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Card from "./components/UI/Card.jsx";
import Section from "./components/UI/Section.jsx";
import About from "./components/About/About";
import Container from "./components/UI/Container";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/Footer/Footer.jsx"
import { workExperience } from "./constants/WorkExperience.js";
import { techStack } from "./constants/TechStack.js";

function App() {
  return (
    <div>
      <Section>
          <Navbar />
      </Section>
      <Section>
        <Container>
          <Home work_experiences={workExperience}></Home>
        </Container>
      </Section>

      <Section>
        <Container>
          <About tech_stacks={techStack}/>
        </Container>
      </Section>

      <Section>
        <Container>
          <Projects />
        </Container>
      </Section>

      <Section>
        <Container>
          <Contacts></Contacts>
        </Container>
      </Section>
  
      <Section>
        <Container>
          <Footer></Footer>
        </Container>
      </Section>
    </div>

  );
}

export default App;
