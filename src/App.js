import { ChakraProvider, Container } from "@chakra-ui/react";

import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Publications from "./components/Publications";

function App({ customTheme }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Container maxW={4096}>
        <Header />
        <Experience />
        <Publications />
        <About />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
