import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Spacer, SpacerSize } from './index'
import { SpacerProps } from './SpacerProps'
import { Button, ButtonVariant } from '../button'

const meta = {
  title: 'Components/Spacer',
  component: Spacer,
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(SpacerSize).filter((x) => typeof x === 'string'),
      mapping: Object.assign({}, SpacerSize),
      table: {
        type: { summary: 'SpacerSize' },
      },
    },
  },
} satisfies Meta<SpacerProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: SpacerProps) => (
  <>
    <Button variant={ButtonVariant.PRIMARY}>
      Play with the props <code>size</code>
    </Button>
    <Spacer {...args} />
    <Button variant={ButtonVariant.SECONDARY}>Dans le pannel de contrôle ⬇</Button>
  </>
)

export const Base: Story = {
  render: Template,
  args: {
    size: SpacerSize.ZERO,
  },
}
