import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const About = () => {
  let aboutImg = require("../assets/harold/harold_about.jpg");

  return (
    <Flex flexDir="column" align="center">
      <Center my={10}>
        <Heading>about</Heading>
      </Center>
      <Stack
        direction={{ md: "row", base: "column-reverse" }}
        spacing={10}
        align="center"
      >
        <Box
          w={300}
          fontFamily="Jost"
          textAlign={{ md: "left", base: "center" }}
        >
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
    </Flex>
  );
};

export default About;
