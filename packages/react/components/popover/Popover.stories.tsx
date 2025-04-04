import type { Meta, StoryObj } from '@storybook/react'
import Popover from './Popover'
import { Button, Column, Columns, Icon, Link, Section, Tag } from '@trilogy-ds/react'
import { Text } from '../../lib'

const meta: Meta<typeof Popover> = {
  component: Popover,
}

export default meta

type Story = StoryObj<typeof Popover>

// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Columns verticalAlign>
        <Column>
          <Popover trigger={<Link>Simple</Link>}>
            <Tag label='Test' variant='ERROR' />
            <Icon name='tri-times' />
          </Popover>
        </Column>
        <Column>
          <Popover direction='right' trigger={<Link>Simple</Link>}>
            <Tag label='Test' variant='ERROR' />
            <Icon name='tri-times' />
          </Popover>
        </Column>
        <Column>
          <Popover active trigger={<Button variant='PRIMARY'>Active</Button>}>
            <Text>Yo</Text>
          </Popover>
        </Column>
      </Columns>
    </Section>
  ),
}
