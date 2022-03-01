import { Box, Center, Container, Heading, Image, Text } from '@chakra-ui/react'

const Header = () => {
  let welcomeImg = require('../assets/welcome_man.png')

  return (
    <Center my={50} display='flex' alignItems='center' justifyContent='center' marg>
      <Image height={600} src={welcomeImg} fallback='https://via.placeholder.com/390x600'/>

      <Box>
         <Heading> hello, my name is blank </Heading>
         <Text color="gray">lorem ipsum dolor sit amet</Text>
      </Box>
     </Center>
  )
}

export default Header