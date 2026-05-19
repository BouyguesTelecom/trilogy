import { Badge } from '@/components/badge'
import { FlexBox } from '@/components/flex-box'
import { Icon, IconName } from '@/components/icon'
import { Section } from '@/components/section'
import { StatusState } from '@/objects/facets/Status'
import type { Meta, StoryObj } from '@storybook/react'
import { TrilogyColor } from '../../objects'
import { IconSize } from '../icon'
import { BadgePositionEnum } from './BadgeEnum'
import { BadgeProps, BadgeVariant } from './BadgeProps'
import React from 'react'

const meta: Meta<BadgeProps> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge content text or number',
    },
    inverted: {
      control: 'boolean',
      description: 'Apply inverted styling to the badge',
    },
    variant: {
      control: 'select',
      options: [undefined, ...Object.values(BadgeVariant)],
      description: 'Badge color variant',
    },
    status: {
      control: 'select',
      options: [undefined, ...Object.values(StatusState)],
      description: 'Badge status - displays icon indicator',
    },
    position: {
      control: 'select',
      options: [undefined, ...Object.values(BadgePositionEnum)],
      description: 'Position relative to parent element',
    },
    children: { table: { disable: true } },
    onClick: { table: { disable: true } },
    id: { table: { disable: true } },
    testId: { table: { disable: true } },
    className: { table: { disable: true } },
    accessibilityLabel: { table: { disable: true } },
  },
  args: {
    label: '1',
    inverted: false,
    variant: BadgeVariant.MAIN,
    status: undefined,
    position: undefined,
  },
}

export default meta
type Story = StoryObj<BadgeProps>

export const Default: Story = {
  render: (args) => <Badge {...args} />,
}

export const Variants: Story = {
  render: () => (
    <FlexBox>
      <Badge label='1' variant={BadgeVariant.SUCCESS} />
      <Badge label='2' variant={BadgeVariant.INFO} />
      <Badge label='3' variant={BadgeVariant.WARNING} />
      <Badge label='4' variant={BadgeVariant.ERROR} />
      <Badge label='5' variant={BadgeVariant.MAIN} />
      <Badge label='6' variant={BadgeVariant.ACCENT} />
    </FlexBox>
  ),
}

export const WithStatus: Story = {
  render: () => (
    <FlexBox>
      <Badge status={StatusState.SUCCESS} />
      <Badge status={StatusState.INFO} />
      <Badge status={StatusState.WARNING} />
      <Badge status={StatusState.ERROR} />
    </FlexBox>
  ),
}

export const Inverted: Story = {
  render: () => (
    <Section backgroundColor={TrilogyColor.MAIN_FADE}>
      <FlexBox>
        <Badge label='1' inverted variant={BadgeVariant.SUCCESS} />
        <Badge label='2' inverted variant={BadgeVariant.INFO} />
        <Badge label='3' inverted variant={BadgeVariant.WARNING} />
        <Badge label='4' inverted variant={BadgeVariant.ERROR} />
      </FlexBox>
    </Section>
  ),
}

export const Positioned: Story = {
  render: () => (
    <Badge variant='MAIN' status={StatusState.SUCCESS} position={BadgePositionEnum.TOP_LEFT}>
      <Icon name={IconName.INFOS_CIRCLE} size={IconSize.MEDIUM} />
    </Badge>
  ),
}

export const Playground: Story = {
  parameters: {
    controls: {
      include: ['label', 'variant', 'status', 'inverted', 'position'],
    },
  },
  render: (args) => <Badge {...args} />,
}
