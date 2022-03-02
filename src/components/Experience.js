import { Box, Center, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ExperienceBox from './ExperienceBox';

const Experience = () => {

  const tabListSize = 720;
  const tabSize = tabListSize/3;

  return (
    <Center>
      {/* <h4>Experience</h4> */}
      <Tabs>
        <TabList width={tabListSize}>
          <Tab width={tabSize}>Past</Tab>
          <Tab width={tabSize}>Current</Tab>
          <Tab width={tabSize}>Future</Tab>
        </TabList>

        <TabPanels minHeight={200}>
          <TabPanel>
            <ExperienceBox title='Software Engineer' workName='Stripe'/>
            <ExperienceBox />
          </TabPanel>
          <TabPanel>
          <ExperienceBox title='Software Engineer' workName='Stripe'/>
          </TabPanel>
          <TabPanel>
          <ExperienceBox title='Software Engineer' workName='Stripe' workLink='stripe.com'/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  )
}

export default Experience