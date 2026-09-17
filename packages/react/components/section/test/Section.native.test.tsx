import { render, screen } from '@testing-library/react-native'
import React from 'react'
import { Text } from '@/components/text'
import Section from '@/components/section/Section'

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
