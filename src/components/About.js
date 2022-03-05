import { Box, Center, Heading, Image, Stack, Text } from "@chakra-ui/react";

const About = () => {
  let aboutImg = require("../assets/harold/harold_about.jpg");

  return (
    <>
      <Center my={10}>
        <Heading>about</Heading>
      </Center>
      <Stack justifyContent="center" direction="row" spacing={10}>
        <Box my={50} w={300} fontFamily="Jost">
          <Text my={3}>Hi! I am a subject of stock images.</Text>
          <Text my={3}>
            I collect old computers/laptops, and make my own ceramic mugs for
            coffee ☕ I love working with my hands to create something new, or
            repair integrated hardware 🖥️
          </Text>
          <Text>Thanks for visiting my site!</Text>
        </Box>
        <Image w={500} borderRadius={4} src={aboutImg}></Image>
      </Stack>
    </>
  );
};

export default About;
