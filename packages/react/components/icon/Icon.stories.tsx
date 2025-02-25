import type { Meta, StoryObj } from '@storybook/react'
import { Icon, IconSize } from './index'
import { IconProps } from './IconProps'
import { IconName } from './IconNameEnum'
import { Alignable } from '../../objects'

const meta = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    align: {
      control: 'select',
      options: Object.values(Alignable),
      mapping: Object.assign({}, Alignable),
      table: {
        type: { summary: 'Alignable' },
      },
    },
    verticalAlign: {
      control: 'select',
      options: Object.values(Alignable),
      mapping: Object.assign({}, Alignable),
      table: {
        type: { summary: 'Alignable' },
      },
    },
    name: {
      control: 'select',
      options: Object.values(IconName),
      table: {
        type: { summary: 'IconName' },
      },
    },
  },
} satisfies Meta<IconProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    size: IconSize.SMALL,
    name: IconName.EXCLAMATION_CIRCLE,
  },
}

export const Circled: Story = {
  args: {
    size: IconSize.SMALL,
    name: IconName.EXCLAMATION_CIRCLE,
    circled: true,
  },
}

export const Stretched: Story = {
  args: {
    size: IconSize.SMALL,
    name: IconName.EXCLAMATION_CIRCLE,
    stretched: true,
  },
}

export const Position: Story = {
  args: {
    size: IconSize.SMALL,
    name: IconName.EXCLAMATION_CIRCLE,
    align: Alignable.ALIGNED_START,
  },
}
