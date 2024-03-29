import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Timeline, TimelineContent, TimelineItem, TimelineMarker } from './index'
import { TimelineProps } from './TimelineProps'
import { TimelineItemProps } from './item/TimelineItemProps'
import { IconName } from '../icon'

export default {
  title: 'Components/Timeline',
  component: Timeline,
} as Meta

export const Base: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <TimelineItem undone>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading='20 Septembre'
        content='Modification de votre identifiant de connexion'
        link='link'
        contentLink="Voir l'email"
      />
    </TimelineItem>

    <TimelineItem active>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading='08 Juillet'
        content='SMS Bon voyage avec seuil usage inclus'
        link='link'
        contentLink='Voir le SMS'
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
  </Timeline>
)
export const ItemUndone: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <TimelineItem undone>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent heading='05 Mai' content='Modification de votre adresse de facturation' />
    </TimelineItem>
  </Timeline>
)
export const ItemActive: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <TimelineItem active>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading='08 Juillet'
        content='SMS Bon voyage avec seuil usage inclus'
        link='link'
        contentLink='Voir le SMS'
      />
    </TimelineItem>
  </Timeline>
)
export const ItemCancel: Story<TimelineItemProps> = (args) => (
  <Timeline {...args}>
    <TimelineItem cancel>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent heading='05 Mai' content='Modification de votre adresse de facturation' />
    </TimelineItem>
  </Timeline>
)

export const ItemDone: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <TimelineItem done>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent heading='05 Mai' content='Modification de votre adresse de facturation' />
    </TimelineItem>
  </Timeline>
)

export const horizontal: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <TimelineItem done>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading='20 Septembre'
        content='Modification de votre identifiant de connexion'
        link={'https://bouyguestelecom.fr'}
        contentLink="Voir l'email"
        onClick={(e) => console.log(e)}
      />
    </TimelineItem>

    <TimelineItem done>
      <TimelineMarker iconColor={'WHITE'} iconName={IconName.CHECK} />
      <TimelineContent
        heading='08 Juillet'
        content='SMS Bon voyage avec seuil usage inclus'
        link='link'
        contentLink='Voir le SMS'
      />
    </TimelineItem>
    <TimelineItem active>
      <TimelineMarker iconColor={'WHITE'} iconName={IconName.CHECK} />
      <TimelineContent
        heading='08 Juillet'
        content='SMS Bon voyage avec seuil usage inclus'
        link='link'
        contentLink='Voir le SMS'
      />
    </TimelineItem>
    <TimelineItem undone>
      <TimelineMarker iconColor={'WHITE'} iconName={IconName.CHECK} />
      <TimelineContent
        heading='08 Juillet'
        content='SMS Bon voyage avec seuil usage inclus'
        link='link'
        contentLink='Voir le SMS'
      />
    </TimelineItem>
  </Timeline>
)
horizontal.args = {
  horizontal: true,
}
