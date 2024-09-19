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

function App() {
  const work_experiences = [
    { 
      "id": 0,
      "company_name": "DECENTRO",
      "duration": "SEPT 2022 - PRESENT",
      "role": "Software Development Engineer",
      "responsibilities": [
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ]
    },
    {
      "id": 1,
      "company_name": "IQVIA",
      "duration": "AUG 2021 - SEPT 2022",
      "role": "AI Engineer",
      "responsibilities": [
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ]
    }
  ]
  const tech_stacks = [
    {
      title: "PROGRAMMING LANGUAGE",
      technologies: ["PYTHON", "JAVASCRIPT", "GO"],
    },
    {
      title: "WEB DEVELOPMENT",
      technologies: [ "FASTAPI", "FLASK", "LITESTAR", "REACT", "TAILWIND"],
    },
    {
      title: "DEEP LEARNING",
      technologies: ["PYTORCH"],
    },
    {
      title: "DATABASES",
      technologies: ["POSTGRESQL", "MYSQL", "MONGODB", "SCYLLADB", "REDIS"],
    },
    {
      title: "DEPLOYMENT",
      technologies: ["DOCKER", "CI/CD"],
    },
    {
      title: "CLOUD",
      technologies: ["AWS", "AZURE", "GCP"],
    },
  ];
  return (
    <div>
      <Section>
          <Navbar />
      </Section>
      <Section>
        <Container>
          <Home work_experiences={work_experiences}></Home>
        </Container>
      </Section>

      <Section>
        <Container>
          <About tech_stacks={tech_stacks}/>
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
    </div>
  );
}

export default App;
