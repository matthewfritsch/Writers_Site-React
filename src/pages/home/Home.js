import { About, Experience, Footer, Header, Publications } from "./components";
import { Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW={4096}>
      <Header />
      <Experience />
      <Publications />
      <About />
      <Footer />
    </Container>
  );
};

export default Home;
