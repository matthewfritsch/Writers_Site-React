import { Center, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Center py={10}>
        <Link
          color="gray.600"
          href="https://matthewfritsch.com"
          _hover={{ color: "blue.400" }}
          isExternal
        >
          Built by Matthew Fritsch to learn React JS
        </Link>
        <Text color="gray.500" mx="0.5em">
          |
        </Text>
        <Link
          color="gray.600"
          href="https://starcsu.com/"
          _hover={{ color: "blue.400" }}
          isExternal
        >
          Made as a recreation of this site, by Star Su
        </Link>
      </Center>
    </>
  );
};

export default Footer;
