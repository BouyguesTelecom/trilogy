import type { Meta, StoryObj } from '@storybook/react'
import Popover from './Popover'
import { Alignable, Button, Column, Columns, Icon, Link, Section, Tag, TrilogyColor } from '@trilogy-ds/react'
import { Text } from '../../lib'

const meta: Meta<typeof Popover> = {
  component: Popover,
  argTypes: {
    direction: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'inline-radio' },
    },
    arrowPosition: {
      options: ['start', 'center' ,'end'],
      control: { type: 'inline-radio' },
    },
    triggerVariant: {
      options: ['PRIMARY', 'SECONDARY', 'CONVERSION', 'GHOST'],
      control: { type: 'inline-radio' },
    },
    triggerButton: {
      control: { type: 'text' },
    },
  },
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


export const Sandbox: Story = {
  render: (args) => (
    <Section>
      <Columns align={Alignable.ALIGNED_CENTER}>
        <Column narrow align={Alignable.ALIGNED_CENTER}>
          <Popover {...args} trigger={<Button variant={args.triggerVariant}>{args.triggerButton}</Button>}>
            <Text>{args.text}</Text>
          </Popover>
        </Column>
      </Columns>
    </Section>
  ),
  args:{
    triggerButton: 'Popover',
    triggerVariant: 'PRIMARY',
    text: 'Hello World',
    direction: 'bottom',
    arrowPosition: undefined,
    accessibilityLabel: 'Popover',
    testId: 'popover',
    id: 'popover',
  }
}
