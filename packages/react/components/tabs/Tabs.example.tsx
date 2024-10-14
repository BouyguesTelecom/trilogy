import React from 'react'
import { Tabs, TabsItem } from './index'
import { Columns, ColumnsItem } from '../columns'

const TabsExample: React.ReactNode =
  <Columns>
      <ColumnsItem>
        <Tabs
          activeIndex={2}
        >
          <TabsItem
            disabled
            iconName='tri-alert'
          >
            One
          </TabsItem>
          <TabsItem iconName='tri-alert'
          >
            Two
          </TabsItem>
          <TabsItem iconName='tri-alert'
          >
            Three
          </TabsItem>
        </Tabs>
      </ColumnsItem>
      <ColumnsItem>
        <Tabs
          activeIndex={2}
        >
          <TabsItem disabled>
            One
          </TabsItem>
          <TabsItem>
            Two
          </TabsItem>
          <TabsItem>
            Three
          </TabsItem>
        </Tabs>
      </ColumnsItem>
    </Columns>
export default TabsExample
