import type { Meta, StoryObj } from '@storybook/react'
import { Section, Tab, TabList, TabPanel, Tabs, Title } from '../../lib'
import { TabPanels } from './index'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  subcomponents: { TabList, Tab, TabPanel, TabPanels}
}

export default meta

type Story = StoryObj<typeof Tabs>


// @ts-ignore
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
