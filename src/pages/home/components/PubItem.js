import { Container, Divider, Flex, Link, Text } from "@chakra-ui/react";

const PubItem = ({ title, titleLink, tech, techLink, addNote, bottomNote }) => {
  return (
    <>
      <Divider w="100%" mb={5} display={["auto", "none"]} />
      <Container mb={5}>
        <Flex flexDir={{ base: "column", md: "row" }} textAlign={"center"}>
          {titleLink.length > 0 ? (
            <Link isExternal href={"https://" + titleLink}>
              {title + " "}
            </Link>
          ) : (
            <Text>{title}</Text>
          )}
          <Text px={{ md: "0.5em", base: "0" }}>using</Text>
          {techLink.length > 0 ? (
            <Link isExternal href={"https://" + techLink}>
              {" " + tech}
            </Link>
          ) : (
            <Text>{" " + tech}</Text>
          )}
          <Text>{addNote && ","}</Text>
          <Text overflow="hidden" mx={2}>
            {addNote}
          </Text>
        </Flex>
        <Text minW="600" display={{ base: "none", md: "inline" }}>
          {bottomNote}
        </Text>
      </Container>
    </>
  );
};

export default PubItem;
