import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import customTheme from './theme.js';

import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Publications from "./components/Publications";

function App() {

  // AOS init
  // useEffect()

  return (
    <ChakraProvider theme={customTheme}>
      
      <div className="App">
        <Header />
        <Experience />
        <Publications />
        <About />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
