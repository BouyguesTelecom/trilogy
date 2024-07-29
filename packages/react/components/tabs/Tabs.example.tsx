import React from 'react'
import { Tabs, TabsItem } from './index'

const TabsExample: React.ReactNode =

  <Tabs
    activeIndex={2}
    onClick={function noRefCheck() {
    }}
  >
    <TabsItem
      disabled
      iconName="tri-alert"
    >
      One
    </TabsItem>
    <TabsItem iconName="tri-alert"
    >
      Two
    </TabsItem>
    <TabsItem iconName="tri-alert"
    >
      Three
    </TabsItem>
  </Tabs>

export default TabsExample
