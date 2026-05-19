import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Alignable } from '../../objects/facets/Alignable'
import TabsComponent from './Tabs'
import type { TabsProps } from './TabsProps'
import TabList from './tab-list/TabList'
import Tab from './tab-list/tab/Tab'
import TabPanels from './tab-panels/TabPanels'
import TabPanel from './tab-panels/tab-panel/TabPanel'

TabsComponent.displayName = 'Tabs'
TabList.displayName = 'TabList'
Tab.displayName = 'Tab'
TabPanels.displayName = 'TabPanels'
TabPanel.displayName = 'TabPanel'
Object.defineProperty(TabsComponent, 'name', { value: 'Tabs' })

const Tabs = (props: TabsProps): JSX.Element => <TabsComponent {...props} />
Tabs.displayName = 'Tabs'

interface TabsStoryArgs {
  tabs_activeIndex: number
  tabs_fullwidth: boolean
  tabs_inverted: boolean
  tabs_small: boolean
  tabs_align?: Alignable
  tabs_id: string
  tabs_className: string
  tabs_testId: string
  tab_one_label: string
  tab_one_disabled: boolean
  tab_two_label: string
  tab_two_disabled: boolean
  tab_three_label: string
  tab_three_disabled: boolean
  panel_one_children: string
  panel_two_children: string
  panel_three_children: string
}

const meta: Meta<TabsStoryArgs> = {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { TabList, Tab, TabPanels, TabPanel },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    tabs_activeIndex: {
      control: { type: 'number', min: 0, max: 2, step: 1 },
      name: 'activeIndex',
      description: 'Default active tab index',
      table: { category: 'Tabs' },
    },
    tabs_fullwidth: {
      control: 'boolean',
      name: 'fullwidth',
      description: 'Stretch tabs to full width',
      table: { category: 'Tabs' },
    },
    tabs_inverted: {
      control: 'boolean',
      name: 'inverted',
      description: 'Inverted color scheme',
      table: { category: 'Tabs' },
    },
    tabs_small: {
      control: 'boolean',
      name: 'small',
      description: 'Compact tab size',
      table: { category: 'Tabs' },
    },
    tabs_align: {
      control: 'select',
      options: [undefined, Alignable.ALIGNED_START, Alignable.ALIGNED_CENTER, Alignable.ALIGNED_END],
      name: 'align',
      description: 'Tab list alignment',
      table: { category: 'Tabs' },
    },
    tabs_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'Tabs' },
    },
    tabs_className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
      table: { category: 'Tabs' },
    },
    tabs_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
      table: { category: 'Tabs' },
    },
    tab_one_label: {
      control: 'text',
      name: 'label',
      description: 'First tab label',
      table: { category: 'Tab 1' },
    },
    tab_one_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable first tab',
      table: { category: 'Tab 1' },
    },
    tab_two_label: {
      control: 'text',
      name: 'label',
      description: 'Second tab label',
      table: { category: 'Tab 2' },
    },
    tab_two_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable second tab',
      table: { category: 'Tab 2' },
    },
    tab_three_label: {
      control: 'text',
      name: 'label',
      description: 'Third tab label',
      table: { category: 'Tab 3' },
    },
    tab_three_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable third tab',
      table: { category: 'Tab 3' },
    },
    panel_one_children: {
      control: 'text',
      name: 'children',
      description: 'First panel content',
      table: { category: 'TabPanel 1' },
    },
    panel_two_children: {
      control: 'text',
      name: 'children',
      description: 'Second panel content',
      table: { category: 'TabPanel 2' },
    },
    panel_three_children: {
      control: 'text',
      name: 'children',
      description: 'Third panel content',
      table: { category: 'TabPanel 3' },
    },
  },
  args: {
    tabs_activeIndex: 0,
    tabs_fullwidth: false,
    tabs_inverted: false,
    tabs_small: false,
    tabs_align: undefined,
    tabs_id: '',
    tabs_className: '',
    tabs_testId: '',
    tab_one_label: 'Tab 1',
    tab_one_disabled: false,
    tab_two_label: 'Tab 2',
    tab_two_disabled: false,
    tab_three_label: 'Tab 3',
    tab_three_disabled: false,
    panel_one_children: 'Content of Tab 1',
    panel_two_children: 'Content of Tab 2',
    panel_three_children: 'Content of Tab 3',
  },
  render: ({
    tabs_activeIndex,
    tabs_fullwidth,
    tabs_inverted,
    tabs_small,
    tabs_align,
    tabs_id,
    tabs_className,
    tabs_testId,
    tab_one_label,
    tab_one_disabled,
    tab_two_label,
    tab_two_disabled,
    tab_three_label,
    tab_three_disabled,
    panel_one_children,
    panel_two_children,
    panel_three_children,
  }) => (
    <TabsComponent
      activeIndex={tabs_activeIndex}
      fullwidth={tabs_fullwidth}
      inverted={tabs_inverted}
      small={tabs_small}
      align={tabs_align}
      id={tabs_id || undefined}
      className={tabs_className || undefined}
      testId={tabs_testId || undefined}
    >
      <TabList>
        <Tab label={tab_one_label} disabled={tab_one_disabled} />
        <Tab label={tab_two_label} disabled={tab_two_disabled} />
        <Tab label={tab_three_label} disabled={tab_three_disabled} />
      </TabList>
      <TabPanels>
        <TabPanel>{panel_one_children}</TabPanel>
        <TabPanel>{panel_two_children}</TabPanel>
        <TabPanel>{panel_three_children}</TabPanel>
      </TabPanels>
    </TabsComponent>
  ),
}

export default meta

type Story = StoryObj<TabsStoryArgs>

export const Default: Story = {}

export const Fullwidth: Story = {
  args: {
    tabs_fullwidth: true,
  },
}

export const Small: Story = {
  args: {
    tabs_small: true,
  },
}

export const Centered: Story = {
  args: {
    tabs_align: Alignable.ALIGNED_CENTER,
  },
}

export const SecondActive: Story = {
  args: {
    tabs_activeIndex: 1,
  },
}

export const WithDisabledTab: Story = {
  args: {
    tab_three_disabled: true,
  },
}

export const Playground: Story = {}
