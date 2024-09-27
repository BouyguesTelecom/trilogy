import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Text from '../../text/Text.native'
import Container from '../Container'

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
