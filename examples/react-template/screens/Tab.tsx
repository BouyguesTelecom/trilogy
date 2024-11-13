import * as React from 'react'
import { Section, Tab, TabList, TabPanel, TabPanels, Tabs, Title, TitleLevels } from '@trilogy-ds/react/components'
import { IconName } from '@trilogy-ds/react'

export const TabScreen = (): JSX.Element => {
  return (
    <Section>
      <script defer src='https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.1/trilogy-vanilla.min.js' />
      <Title level={TitleLevels.THREE}>Simple</Title>

      <Tabs>
        <TabList>
          <Tab label='Tab 1' iconName={IconName.ALERT} />
          <Tab label='Tab 2' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
        </TabList>
        <TabPanels>
          <TabPanel>
            <Title>Hello</Title>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Section>
  )
}
