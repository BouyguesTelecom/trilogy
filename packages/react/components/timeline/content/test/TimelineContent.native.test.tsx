import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import TimelineContent from '@/components/timeline/content/TimelineContent'

jest.useFakeTimers()

describe('TimelineContent component', () => {
  const onClick = jest.fn()

  it('renders without crashing', async () => {
    render(
      <TimelineContent
        onClick={onClick}
        heading='20 Septembre'
        content='Modification de votre identifiant de connexion'
        link={'https://bouyguestelecom.fr'}
        contentLink="Voir l'email"
      />,
    )
    expect(screen.getByText('20 Septembre')).toBeOnTheScreen()
    expect(screen.getByText('Modification de votre identifiant de connexion')).toBeOnTheScreen()
    expect(screen.getByText("Voir l'email")).toBeOnTheScreen()

    const user = userEvent.setup()
    await user.press(screen.getByTestId('click-id'))
    expect(onClick).toHaveBeenCalled()
  })
})
