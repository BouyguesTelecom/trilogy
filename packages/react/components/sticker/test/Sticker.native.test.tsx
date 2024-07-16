import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import { Text } from '../../text'
import { Sticker } from '../index'

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
