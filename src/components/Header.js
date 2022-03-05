import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Header = () => {
  let welcomeImg = require("../assets/harold/harold_welcome.jpg");

  const { toggleColorMode } = useColorMode();

  const icon = useColorModeValue(<SunIcon />, <MoonIcon />);

  return (
    <>
      <Flex justifyContent="flex-end">
        <IconButton my={4} icon={icon} onClick={toggleColorMode} pos="fixed" />
      </Flex>
      <Flex
        pt={20}
        pb={10}
        alignItems="center"
        justifyContent="center"
        flexDir={{ base: "column", md: "row" }}
      >
        <Image
          w={[300, 400]}
          src={welcomeImg}
          fallback="https://via.placeholder.com/390x600"
          mx={30}
          my={[10, 0]}
          borderRadius={5}
        />

        <Flex flexDir="column" textAlign="center" borderLeft={20}>
          <Heading> hello, my name is harold </Heading>
          <Text letterSpacing={2} color="gray">
            stock image subject and internet icon
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
