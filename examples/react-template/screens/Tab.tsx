import {
  Button,
  IconName,
  Section,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import { Alignable } from '@trilogy-ds/react/objects'
import * as React from 'react'

export const TabScreen = (): JSX.Element => {
  const [index, setIndex] = React.useState(0)
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Simple</Title>

      <Tabs>
        <TabList>
          <Tab active={index === 0} label='Tab 1' iconName={IconName.ALERT} href='/hello' onClick={() => setIndex(0)} />
          <Tab active={index === 1} label='Tab 2' iconName={IconName.ALERT} onClick={() => setIndex(1)} />
          <Tab active={index === 2} label='Tab 3' iconName={IconName.ALERT} onClick={() => setIndex(2)} disabled />
        </TabList>
        <TabPanels>
          <TabPanel>
            <Title>Tab 1</Title>
          </TabPanel>
          <TabPanel>
            <Title>Tab 2</Title>
          </TabPanel>
          <TabPanel>
            <Title>Tab 3</Title>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Button variant='CONVERSION' onClick={() => setIndex(1)}>
        Set Tab 2
      </Button>

      <Tabs>
        <TabList align={Alignable.ALIGNED_START}>
          <Tab label='Tab 1' iconName={IconName.ALERT} />
          <Tab label='Tab 2' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
        </TabList>
        <TabPanels>
          <TabPanel>
            <Title>Tab 1</Title>
          </TabPanel>
          <TabPanel>
            <Title>Tab 2</Title>
          </TabPanel>
          <TabPanel>
            <Title>Tab 3</Title>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Tabs>
        <TabList align={Alignable.ALIGNED_END}>
          <Tab label='Tab 1' iconName={IconName.ALERT} />
          <Tab label='Tab 2' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
        </TabList>
        <TabPanels>
          <TabPanel>
            <Title>Tab 1</Title>
          </TabPanel>
          <TabPanel>
            <Title>Tab 2</Title>
          </TabPanel>
          <TabPanel>
            <Title>Tab 3</Title>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Section>
  )
}
