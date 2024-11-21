import { render, screen } from '@testing-library/react-native'
import React from 'react'

import Container from '@/components/container/Container'
import Text from '@/components/text/Text.native'

jest.useFakeTimers()

describe('container component', () => {
  it('renders the children correctly', () => {
    render(
      <Container>
        <Text>Hello</Text>
      </Container>,
    )
    expect(screen.getByText('Hello')).toBeOnTheScreen()
  })
})
