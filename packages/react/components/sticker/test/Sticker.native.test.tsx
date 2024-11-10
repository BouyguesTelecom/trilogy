import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import { Sticker } from '../index'

jest.useFakeTimers()

describe('Sticker', () => {
  it('should be rendered', () => {
    render(<Sticker label='DEFAULT' />)
    expect(screen.getByText('DEFAULT')).toBeOnTheScreen()
  })
})
