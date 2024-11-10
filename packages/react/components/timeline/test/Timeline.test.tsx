import * as React from 'react'
import { render } from '@testing-library/react'
import Timeline from '../Timeline'
import TimelineItem from '../item'
import TimelineMarker from '../marker'
import { IconName } from '../../icon'
import TimelineContent from '../content'

describe('Timeline component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Timeline id="my-timeline-id">
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
        <TimelineItem active>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='08 Juillet'
            content='SMS Bon voyage avec seuil usage inclus'
            linkTo='link'
            linkLabel='Voir le SMS'
          />
        </TimelineItem>
        <TimelineItem cancel>
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
    expect(container.firstChild).toBeInTheDocument()
  })

  it('adds the `timeline` class', () => {
    const { container } = render(
      <Timeline horizontal>
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
        <TimelineItem active>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='08 Juillet'
            content='SMS Bon voyage avec seuil usage inclus'
            linkTo='link'
            linkLabel='Voir le SMS'
          />
        </TimelineItem>
        <TimelineItem cancel>
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
    expect(container.firstChild).toHaveClass('timeline')
  })

  it('adds the `horizontal` class when `horizontal` prop is passed', () => {
    const { container } = render(<Timeline horizontal>toto</Timeline>)
    expect(container.firstChild).toHaveClass('is-horizontal')
  })

  it('adds the custom class when `className` prop is passed', () => {
    const { container } = render(<Timeline className={'custom-class'}>toto</Timeline>)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
