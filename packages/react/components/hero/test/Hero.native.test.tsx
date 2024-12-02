import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import { Container } from '@/components/container'
import Hero from '@/components/hero/Hero.native'
import { TrilogyColor } from '@/objects'

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
