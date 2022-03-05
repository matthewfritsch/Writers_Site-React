import { Center, Container, Flex, Link, Text } from "@chakra-ui/react"


const ExperienceBox = ({title, workName, workLink, timeframe}) => {

    const width = 560;

  return ( !title || !workName || !workLink ? <></> : (
    <Container w={width} borderRadius={8} padding={3} border='2px' borderColor='#749ECB' display='flex' flexDir='column' justifyContent='center' flex minH={30}>
        <Flex flexDir='row'>
            <Text marginRight={2} textStyle='underline'>{title}</Text>
            <Link color='blue.400' href={'http://'+workLink}>@{workName}</Link>
        </Flex>
        <Text>{timeframe}</Text>
    </Container>
  ))
}

export default ExperienceBox