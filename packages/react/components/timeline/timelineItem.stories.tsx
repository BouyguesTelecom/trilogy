import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Timeline, TimelineContent, TimelineItem, TimelineMarker } from './index'
import { IconName } from '../icon'
import { TimelineItemProps } from './item/TimelineItemProps'

const meta = {
  title: 'Components/Timeline/TimelineItem',
  component: TimelineItem,
  subcomponents: { Timeline, TimelineMarker, TimelineContent },
} satisfies Meta<TimelineItemProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: TimelineItemProps) => (
  <Timeline>
    <TimelineItem {...args} />
  </Timeline>
)

const children = (
  <>
    <TimelineMarker iconName={IconName.CHECK} />
    <TimelineContent
      heading='20 Septembre'
      content='Modification de votre identifiant de connexion'
      linkTo='_blank'
      linkLabel="Voir l'email"
    />
  </>
)

export const ItemUndone: Story = {
  render: Template,
  args: {
    cancel: true,
    children: children,
  },
}

export const ItemActive: Story = {
  render: Template,
  args: {
    active: true,
    children: children,
  },
}

export const ItemCancel: Story = {
  render: Template,
  args: {
    cancel: true,
    children: children,
  },
}

export const ItemDone: Story = {
  render: Template,
  args: {
    done: true,
    children: children,
  },
}
