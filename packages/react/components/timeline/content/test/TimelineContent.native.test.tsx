import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import TimelineContent from '../TimelineContent'

jest.useFakeTimers()

describe('TimelineContent component', () => {
  it('renders without crashing', async () => {
    render(
      <TimelineContent
        heading='20 Septembre'
        content='Modification de votre identifiant de connexion'
        linkTo={'https://bouyguestelecom.fr'}
        linkLabel="Voir l'email"
      />,
    )
    expect(screen.getByText('20 Septembre')).toBeOnTheScreen()
    expect(screen.getByText('Modification de votre identifiant de connexion')).toBeOnTheScreen()
    expect(screen.getByText("Voir l'email")).toBeOnTheScreen()
  })
})
