import { render, screen } from '@testing-library/react-native'
import { IconName } from '@trilogy-ds/assets'
import * as React from 'react'
import { TrilogyColor } from '../../../../objects'
import Timeline from '../../Timeline'
import TimelineContent from '../../content'
import TimelineMarker from '../../marker'
import TimelineItem from '../TimelineItem'

describe('TimelineItem component', () => {
  it('renders without crashing', () => {
    render(
      <Timeline>
        <TimelineItem cancel>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 Septembre'
            content='Modification de votre identifiant de connexion'
            linkTo={'https://bouyguestelecom.fr'}
            linkLabel="Voir l'email"
          />
        </TimelineItem>
      </Timeline>,
    )
    expect(screen.getByText('20 Septembre')).toBeOnTheScreen()
    expect(screen.getByText('Modification de votre identifiant de connexion')).toBeOnTheScreen()
    expect(screen.getByText("Voir l'email")).toBeOnTheScreen()
  })
})
