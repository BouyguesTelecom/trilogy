import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { IconName } from '@/components/icon'
import Timeline from '@/components/timeline/Timeline'
import TimelineContent from '@/components/timeline/content'
import TimelineItem from '@/components/timeline/item'
import TimelineMarker from '@/components/timeline/marker'
import { TrilogyColor } from '@/objects'

describe('Timeline component', () => {
  it('renders without crashing', () => {
    render(
      <Timeline>
        <TimelineItem cancel>
          <TimelineMarker iconName={IconName.CHECK} iconColor={TrilogyColor.BACKGROUND} />
          <TimelineContent
            heading='20 Septembre'
            content='Modification de votre identifiant de connexion'
            link={'https://bouyguestelecom.fr'}
            contentLink="Voir l'email"
          />
        </TimelineItem>

        <TimelineItem done>
          <TimelineMarker iconColor={TrilogyColor.BACKGROUND} iconName={IconName.CHECK} />
          <TimelineContent
            heading='08 Juillet'
            content='SMS Bon voyage avec seuil usage inclus'
            link='link'
            contentLink='Voir le SMS'
          />
        </TimelineItem>
      </Timeline>,
    )
    expect(screen.getByText('20 Septembre')).toBeOnTheScreen()
    expect(screen.getByText('Modification de votre identifiant de connexion')).toBeOnTheScreen()
    expect(screen.getByText("Voir l'email")).toBeOnTheScreen()

    expect(screen.getByText('08 Juillet')).toBeOnTheScreen()
    expect(screen.getByText('SMS Bon voyage avec seuil usage inclus')).toBeOnTheScreen()
    expect(screen.getByText('Voir le SMS')).toBeOnTheScreen()
  })
})
