'use client'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@trilogy-ds/react/lib/components/tabs'
import { Alignable } from '@trilogy-ds/react/lib/objects'
import * as React from 'react'

export default function TabsClient() {
  const [index, setIndex] = React.useState(0)
  return (
    <>
      <p>Simple</p>

      <Tabs>
        <TabList>
          <Tab active={index === 0} label='Tab 1' iconName='tri-alert' href='/hello' onClick={() => setIndex(0)} />
          <Tab active={index === 1} label='Tab 2' iconName='tri-alert' onClick={() => setIndex(1)} />
          <Tab active={index === 2} label='Tab 3' iconName='tri-alert' onClick={() => setIndex(2)} disabled />
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

      <div>
        <button className='button is-primary' onClick={() => setIndex(1)}>
          Set Tab 2
        </button>
      </div>

      <Tabs>
        <TabList align={Alignable.ALIGNED_START}>
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
        <TabList align={Alignable.ALIGNED_END}>
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
    </>
  )
}
