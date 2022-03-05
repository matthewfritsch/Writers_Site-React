import { Center, Grid, GridItem, Text } from "@chakra-ui/react";
import PubItem from "./PubItem";

const PubSection = ({ sectName, entries }) => {
  return (
    <>
      <Center
        display="flex"
        alignItems="center"
        position="relative"
        fontFamily="Jost"
      >
        <Grid templateColumns="repeat (5, 1fr)">
          <GridItem mr={10}>
            <Text mx={30}>{sectName}</Text>
          </GridItem>
          <GridItem colStart={2} colEnd={4}>
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
