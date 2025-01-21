import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@trilogy-ds/react/lib/components/tabs'

export default function TabsSSR() {
  return (
    <div>
      <main>
        <Tabs>
          <TabList>
            <Tab label='Tab 1' iconName='tri-alert' href='/hello' />
            <Tab label='Tab 2' iconName='tri-alert' />
            <Tab label='Tab 3' iconName='tri-alert' disabled />
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione impedit ipsam quidem autem ipsum
                tempora magnam dignissimos nulla consequuntur molestias architecto soluta at qui, delectus, repellat ea
                obcaecati numquam.
              </p>
            </TabPanel>
            <TabPanel>
              <p>Tab 2</p>
            </TabPanel>
            <TabPanel>
              <p>Tab 3</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Tabs>
          <TabList align='ALIGNED_START'>
            <Tab label='Tab 1' iconName='tri-alert' />
            <Tab label='Tab 2' iconName='tri-alert' />
            <Tab label='Tab 3' iconName='tri-alert' />
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Tab 1</p>
            </TabPanel>
            <TabPanel>
              <p>Tab 2</p>
            </TabPanel>
            <TabPanel>
              <p>Tab 3</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Tabs>
          <TabList align='ALIGNED_END'>
            <Tab label='Tab 1' iconName='tri-alert' />
            <Tab label='Tab 2' iconName='tri-alert' />
            <Tab label='Tab 3' iconName='tri-alert' />
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Tab 1</p>
            </TabPanel>
            <TabPanel>
              <p>Tab 2</p>
            </TabPanel>
            <TabPanel>
              <p>Tab 3</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </div>
  )
}
