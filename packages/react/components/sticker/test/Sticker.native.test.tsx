import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { Sticker } from '@/components/sticker'
import { Text } from '@/components/text'

jest.useFakeTimers()

describe('Sticker', () => {
  it('should be rendered', () => {
    render(<Sticker>DEFAULT</Sticker>)
    expect(screen.getByText('DEFAULT')).toBeOnTheScreen()
  })

  it('should be rendered', () => {
    render(
      <Sticker>
        <Text>toto</Text>
      </Sticker>,
    )
    expect(screen.getByText('toto')).toBeOnTheScreen()
  })
})
