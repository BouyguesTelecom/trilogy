import { render, screen } from '@testing-library/react-native'
import { IconName } from '@trilogy-ds/assets'
import React from 'react'

import Timeline from '@/components/timeline/Timeline'
import TimelineContent from '@/components/timeline/content'
import TimelineItem from '@/components/timeline/item/TimelineItem'
import TimelineMarker from '@/components/timeline/marker'
import { TrilogyColor } from '@/objects'

describe('TimelineItem component', () => {
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
      </Timeline>,
    )
    expect(screen.getByText('20 Septembre')).toBeOnTheScreen()
    expect(screen.getByText('Modification de votre identifiant de connexion')).toBeOnTheScreen()
    expect(screen.getByText("Voir l'email")).toBeOnTheScreen()
  })
})
