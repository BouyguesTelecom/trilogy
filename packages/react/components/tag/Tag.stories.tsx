import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns, Section, Tab, TabList, TabPanel, Tag } from '../../lib'
import { TagList } from './index'

const meta: Meta<typeof Tag> = {
  component: Tag,
}

export default meta

type Story = StoryObj<typeof Tag>


// @ts-ignore
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
