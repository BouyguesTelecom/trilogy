import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import { IconName } from '../../icon'
import Timeline from '../Timeline'
import TimelineContent from '../content'
import TimelineItem from '../item'
import TimelineMarker from '../marker'

describe('Timeline component', () => {
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

        <TimelineItem done>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='08 Juillet'
            content='SMS Bon voyage avec seuil usage inclus'
            linkTo='link'
            linkLabel='Voir le SMS'
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
