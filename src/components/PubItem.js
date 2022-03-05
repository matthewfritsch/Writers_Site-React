import { Container, Flex, Link, Text } from "@chakra-ui/react";

const PubItem = ({ title, titleLink, tech, techLink, addNote, bottomNote }) => {
  return (
    <Container w="container.sm" mb={5}>
      <Flex>
        {titleLink.length > 0 ? (
          <Link isExternal href={"https://" + titleLink}>
            {title}
          </Link>
        ) : (
          <Text>{title}</Text>
        )}
        <Text mx={2}>-</Text>
        {techLink.length > 0 ? (
          <Link isExternal href={"https://" + techLink}>
            {tech}
          </Link>
        ) : (
          <Text>{tech}</Text>
        )}
        <Text>{addNote && ","}</Text>
        <Text mx={2}>{addNote}</Text>
      </Flex>
      <Text>{bottomNote}</Text>
    </Container>
  );
};

export default PubItem;
