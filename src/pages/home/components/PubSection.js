import { Box, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import PubItem from "./PubItem";

const PubSection = ({ sectName, entries }) => {
  return (
    <>
      <Center display="flex" position="relative" fontFamily="Jost" pb={5}>
        <Grid
          templateColumns={{ md: "repeat (2, 1fr)", base: "repeat (5, 1fr)" }}
        >
          <GridItem mr={[0, 10]}>
            <Box w={{ md: 200 }}>
              <Text
                mx={30}
                mb={5}
                textDecoration="underline"
                textAlign={{ base: "center", md: "right" }}
              >
                {sectName}
              </Text>
            </Box>
          </GridItem>
          <GridItem colStart={{ base: 1, sm: 2 }}>
            {entries.map((entry, index) => (
              <PubItem
                key={index}
                title={entry.title}
                titleLink={entry.titleLink}
                tech={entry.tech}
                techLink={entry.techLink}
                addNote={entry.addNote}
                bottomNote={entry.bottomNote}
              />
            ))}
          </GridItem>
        </Grid>
      </Center>
    </>
  );
};

export default PubSection;
//TODO switch the Grid to an HStack
