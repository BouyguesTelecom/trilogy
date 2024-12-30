import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Timeline, TimelineContent, TimelineItem, TimelineMarker } from './index'
import { TimelineProps } from './TimelineProps'
import { IconName } from '../icon'
import { TimelineItemProps } from './item/TimelineItemProps'

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  subcomponents: { TimelineItem, TimelineMarker, TimelineContent },
} satisfies Meta<TimelineProps>

export default meta
type Story = StoryObj<typeof meta>

const childrenTimeline = (
  <>
    <TimelineItem cancel>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading='20 Septembre'
        content='Modification de votre identifiant de connexion'
        linkTo='_blank'
        linkLabel="Voir l'email"
      />
    </TimelineItem>

    <TimelineItem active>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading='08 Juillet'
        content='SMS Bon voyage avec seuil usage inclus'
        linkTo='_blank'
        linkLabel='Voir le SMS'
      />
    </TimelineItem>

    <TimelineItem done>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent heading='06 Juillet' content='Passage en boutique concernant un accessoire' />
    </TimelineItem>

    <TimelineItem done>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent heading='05 Mai' content='Modification de votre adresse de facturation' />
    </TimelineItem>
  </>
)

export const Base: Story = {
  args: {
    children: childrenTimeline,
  },
}

export const Horizontal: Story = {
  args: {
    children: childrenTimeline,
    horizontal: true,
  },
}
