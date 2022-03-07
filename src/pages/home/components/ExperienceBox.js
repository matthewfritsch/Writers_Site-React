import { Flex, Link, Text } from "@chakra-ui/react";

const ExperienceBox = ({ title, workName, workLink, timeframe }) => {
  return !title || !workName || !workLink ? (
    <></>
  ) : (
    <Flex
      w={[220, 460, 580]}
      borderRadius={8}
      border="2px"
      padding={3}
      mb={1}
      borderColor="#749ECB"
      textAlign={["center", "left"]}
      flexDir="column"
    >
      <Flex flexDir={["column", "row"]}>
        <Text marginRight={2}>{title}</Text>
        <Link color="blue.400" href={"http://" + workLink}>
          @{workName}
        </Link>
      </Flex>
      <Text>{timeframe}</Text>
    </Flex>
  );
};

export default ExperienceBox;
