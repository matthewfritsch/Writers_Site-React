import { Center, Divider, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex
        py={10}
        align="center"
        flexDir={{ base: "column", md: "row" }}
        justifyContent="center"
      >
        <Link
          color="gray.600"
          href="https://matthewfritsch.com"
          _hover={{ color: "blue.400" }}
          isExternal
        >
          Built by Matthew Fritsch to learn React JS
        </Link>
        <Text
          color="gray.500"
          mx="0.5em"
          display={{ base: "none", md: "inline" }}
        >
          |
        </Text>
        <Divider my={{ base: 2, md: 0 }} w={{ base: 300, md: 0 }} />
        <Link
          color="gray.600"
          href="https://starcsu.com/"
          _hover={{ color: "blue.400" }}
          isExternal
        >
          Made as a recreation of this site, by Star Su
        </Link>
      </Flex>
    </>
  );
};

export default Footer;
