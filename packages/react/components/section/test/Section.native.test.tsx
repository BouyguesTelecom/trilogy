import { render, screen } from '@testing-library/react-native'
import React from 'react'
import { Text } from '../../text'
import Section from '../Section'

describe('Section', () => {
  it('renders with all props', () => {
    render(
      <Section>
        <Text>toto</Text>
      </Section>,
    )

    expect(screen.getByText('toto')).toBeOnTheScreen()
  })
})
