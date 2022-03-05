import { Center, Heading } from "@chakra-ui/react";

import PubSection from "./PubSection";

const inProgress = [
  {
    title: "Writer's Website Template",
    titleLink: "github.com/matthewfritsch/Writers_Site-React",
    tech: "React JS & Chakra-UI",
    techLink: "reactjs.org/",
    addNote: "",
    bottomNote:
      "A website made with React to show off the experience and publications of writers",
  },
  {
    title: "Rust Mini Projects",
    titleLink: "github.com/matthewfritsch/RS_MiniProjects",
    tech: "Rust",
    techLink: "www.rust-lang.org/",
    addNote: "",
    bottomNote: "Simple Rust projects to practice and understand Rust nuances",
  },
];

const completed = [
  {
    title: "Todo App",
    titleLink: "github.com/matthewfritsch/Todo-App_React",
    tech: "React JS",
    techLink: "reactjs.org/",
    addNote: "",
    bottomNote:
      "Simple React site to show off the experience and publications of writers",
  },
  {
    title: "Music Generator using Genetic Algorithms",
    titleLink: "github.com/matthewfritsch/MusicGenGA",
    tech: "Python3, MIDI, Genetic AI",
    techLink: "",
    addNote: "",
    bottomNote:
      "A project by four students at UCSC, intended to create a genetic algorithm for indie game designers to develop music.",
  },
  {
    title: "Twitter Trend Finder",
    titleLink: "github.com/matthewfritsch/TwitterTrendFinder",
    tech: "Python3, Selenium, matplotlib/numpy",
    techLink: "",
    addNote: "",
    bottomNote:
      "Python scripts intended to gather, analyze, and visualize frequencies and variances from the Twitter Trending page",
  },
];

const Publications = () => {
  return (
    <>
      <Center mb={10}>
        <Heading>projects</Heading>
      </Center>
      <PubSection sectName="in progress" entries={inProgress} />
      <PubSection sectName="completed" entries={completed} />
    </>
  );
};

export default Publications;
