import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns, Section, Tab, TabList, TabPanel, Tag } from '../../lib'
import { TagList } from './index'
import { IconName } from '../icon'

const meta: Meta<typeof Tag> = {
  component: Tag,
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
    variant: {
      options: ['MAIN', 'ACCENT', 'INFO', 'WARNING', 'SUCCESS', 'ERROR'],
      control: { type: 'inline-radio' },
    },
  }
}

export default meta

type Story = StoryObj<typeof Tag>


export const Example: Story = {
  render: () => (
    <Section>
      <Columns>
        <Column>
          <TagList>
            <Tag iconName="tri-bell" label="Tag" variant="ERROR" />
            <Tag iconName="tri-alert" label="Tag success" variant="SUCCESS" />
            <Tag iconName="tri-arrow-right" label="Tag warning" variant="WARNING" />
            <Tag iconName="tri-eye" label="Tag info" variant="INFO" />
          </TagList>
        </Column>
      </Columns>
    </Section>
  ),
}


export const Sandbox: Story = {
  render: (args) => (
    <Section>
      <Columns>
        <Column>
          <TagList>
            <Tag {...args}/>
          </TagList>
        </Column>
      </Columns>
    </Section>
  ),
  args:{
    iconName: "tri-bell",
    label: "Tag",
    variant: "MAIN",
    className: "sandbox",
  }
}
