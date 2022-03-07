import {
  Center,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import ExperienceBox from "./ExperienceBox";

const prevExp = [
  {
    title: "undergrad",
    workName: "uc santa cruz",
    workLink: "www.ucsc.edu/",
    timeframe: "Sep 2019 - Dec 2021",
  },
  {
    title: "programming instructor",
    workName: "the coder school",
    workLink: "www.thecoderschool.com/locations/pleasanton/",
    timeframe: "Aug 2017 - Mar 2021",
  },
  {
    title: "software engineer intern",
    workName: "carl zeiss meditec",
    workLink: "zeiss.com",
    timeframe: "Jun 2021 - Aug 2021",
  },
];

const currExp = [
  {
    title: "applying for jobs",
    workName: "everywhere",
    workLink: "www.youtube.com/watch?v=bx3--22D4E4",
    timeframe: "Jan 2022 - present",
  },
  {
    title: "learning ReactJS",
    workName: "my desk",
    workLink:
      "smile.amazon.com/NSdirect-Has-Wide-Workstation-Tabletop-Home-Work-Finish-Wood-Board-Sturdy-Steel-Legs/dp/B081RFK5JM/",
    timeframe: "Feb 2022 - present",
  },
  {
    title: "learning Rust",
    workName: "from Jon Gjengset",
    workLink: "rust-for-rustaceans.com/",
    timeframe: "Jan 2022 - present",
  },
];

// future experiences, if any
const futuExp = [
  {
    title: "what am I, a fortune teller?",
    workName: "🤡",
    workLink: "www.youtube.com/watch?v=CJo1-VJzwY4",
    timeframe: "??? - ???",
  },
];

const Experience = () => {
  return (
    <>
      <Center mb={4}>
        <Heading>school/work experience</Heading>
      </Center>
      <Center fontFamily="Jost">
        <Tabs align="center" isFitted defaultIndex={1}>
          <TabList width={[360, 460, 600]}>
            <Tab>Past</Tab>
            <Tab>Current</Tab>
            <Tab>Future</Tab>
          </TabList>

          <TabPanels minHeight={200}>
            <TabPanel>
              {prevExp.map((exp, index) => (
                <ExperienceBox
                  key={index}
                  title={exp.title}
                  workName={exp.workName}
                  workLink={exp.workLink}
                  timeframe={exp.timeframe}
                />
              ))}
            </TabPanel>
            <TabPanel>
              {currExp.map((exp, index) => (
                <ExperienceBox
                  key={index}
                  title={exp.title}
                  workName={exp.workName}
                  workLink={exp.workLink}
                  timeframe={exp.timeframe}
                />
              ))}
            </TabPanel>
            <TabPanel>
              {futuExp.map((exp, index) => (
                <ExperienceBox
                  key={index}
                  title={exp.title}
                  workName={exp.workName}
                  workLink={exp.workLink}
                  timeframe={exp.timeframe}
                />
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </>
  );
};

export default Experience;
