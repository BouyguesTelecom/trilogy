import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import { TrilogyColor } from '../../../objects'
import { Container } from '../../container'
import Hero from '../Hero.native'

jest.useFakeTimers()

describe('Hero component', () => {
  it('renders the children correctly', () => {
    render(
      <Hero backgroundColor={TrilogyColor.MAIN}>
        <Container></Container>
      </Hero>,
    )
    expect(screen.getByTestId('background-id')).toBeOnTheScreen()
  })

  it('renders without background', () => {
    render(
      <Hero>
        <Container></Container>
      </Hero>,
    )
    expect(screen.getByTestId('no-background-id')).toBeOnTheScreen()
  })

  it('should be clickable', async () => {
    const onClick = jest.fn()

    render(
      <Hero backgroundColor={TrilogyColor.MAIN} onClick={onClick}>
        <Container></Container>
      </Hero>,
    )
    const user = userEvent.setup()
    await user.press(screen.getByTestId('background-id'))
    expect(onClick).toHaveBeenCalled()
  })
})
