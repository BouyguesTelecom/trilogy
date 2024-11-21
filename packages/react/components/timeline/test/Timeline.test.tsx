import { render } from '@testing-library/react'
import React from 'react'

import { IconName, Timeline, TimelineContent, TimelineItem, TimelineMarker } from '@/components'
import { TrilogyColor } from '@/objects'

describe('Timeline component', () => {
  it('renders without crashing', () => {
    const { container } = render(
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
        <TimelineItem active>
          <TimelineMarker iconColor={TrilogyColor.BACKGROUND} iconName={IconName.CHECK} />
          <TimelineContent
            heading='08 Juillet'
            content='SMS Bon voyage avec seuil usage inclus'
            link='link'
            contentLink='Voir le SMS'
          />
        </TimelineItem>
        <TimelineItem undone>
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
    expect(container.firstChild).toBeInTheDocument()
  })

  it('adds the `timeline` class', () => {
    const { container } = render(
      <Timeline horizontal>
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
        <TimelineItem active>
          <TimelineMarker iconColor={TrilogyColor.BACKGROUND} iconName={IconName.CHECK} />
          <TimelineContent
            heading='08 Juillet'
            content='SMS Bon voyage avec seuil usage inclus'
            link='link'
            contentLink='Voir le SMS'
          />
        </TimelineItem>
        <TimelineItem undone>
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
