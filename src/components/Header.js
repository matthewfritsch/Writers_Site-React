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
      <Center
        pt={20}
        pb={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          height={400}
          src={welcomeImg}
          fallback="https://via.placeholder.com/390x600"
          mx={30}
          borderRadius={5}
        />

        <Box borderLeft={20}>
          <Heading> hello, my name is harold </Heading>
          <Text letterSpacing={2} color="gray">
            stock image subject and internet icon
          </Text>
        </Box>
      </Center>
    </>
  );
};

export default Header;
