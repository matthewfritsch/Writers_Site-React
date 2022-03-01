import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Experience = () => {
  return (
    <div className='containers'>
      {/* <h4>Experience</h4> */}
      <Tabs>
        <TabList width={600}>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default Experience