import React from 'react'
import { Timeline, TimelineItem, TimelineMarker, TimelineContent } from './index'

const TimelineExample: React.ReactNode =

  <Timeline>
    <TimelineItem undone>
      <TimelineMarker iconName='tri-search' />
      <TimelineContent
        content='Modification de votre identifiant de connexion'
        contentLink="Voir l'email"
        heading='20 Septembre'
        link='link'
      />
    </TimelineItem>
    <TimelineItem active>
      <TimelineMarker iconName='tri-search' />
      <TimelineContent
        content='SMS Bon voyage avec seuil usage inclus'
        contentLink='Voir le SMS'
        heading='08 Juillet'
        link='link'
      />
    </TimelineItem>
    <TimelineItem done>
      <TimelineMarker iconName='tri-search' />
      <TimelineContent
        content='Passage en boutique concernant un accessoire'
        heading='06 Juillet'
      />
    </TimelineItem>
    <TimelineItem done>
      <TimelineMarker iconName='tri-search' />
      <TimelineContent
        content='Modification de votre adresse de facturation'
        heading='05 Mai'
      />
    </TimelineItem>
  </Timeline>

export default TimelineExample
