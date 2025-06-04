import type { Meta, StoryObj } from '@storybook/react'
import { Section, Tab, TabList, TabPanel, Tabs, Title } from '../../lib'
import { TabPanels } from './index'
import { IconName } from '../icon'

const meta: Meta<typeof Tabs> = {
  component: Tab,
  subcomponents: { TabList, TabPanel, TabPanels},
  argTypes:{
    className: {
      control: { type: 'text' },
    },
    iconName: {
      options:[
        IconName.ALERT,
        IconName.CHECK,
        IconName.BELL,
        IconName.EYE,
        IconName.INFOS_CIRCLE,
        IconName.SEARCH,
        IconName.TRASH,
      ],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    selected: {
      control: { type: 'boolean' },
    },
    value: {
      control: { type: 'text' },
    }
  }
}

export default meta

type Story = StoryObj<typeof Tabs>


export const Example: Story = {
  render: () => (
    <Section>
      <Tabs>
        <TabList>
          <Tab href="/hello" iconName="tri-alert" label="Tab 1" />
          <Tab iconName="tri-alert" label="Tab 2" />
          <Tab iconName="tri-alert" label="Tab 3" />
        </TabList>
        <TabPanels>
          <TabPanel>
            <Title> Hello </Title>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Section>
  ),
}


export const Sandbox: Story = {
  render: (args) => (
    <Section>
      <Tabs>
        <TabList>
          <Tab {...args} />
          <Tab iconName="tri-alert" label="Tab 2" />
        </TabList>
        <TabPanels>
          <TabPanel>
            <Title>{args.title}</Title>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Section>
  ),
  args:{
    href: undefined,
    iconName: "tri-alert",
    label: "Sandbox",
    className: "sandbox",
    disabled: false,
    selected: false,
    value: "1",
    title : "Sandbox"
  }
}
