import { render, screen } from '@testing-library/react-native'
import React from 'react'

import Countdown from '@/components/countdown/Countdown'

jest.useFakeTimers()

describe('countdown component', () => {
  it('renders the children correctly', () => {
    render(<Countdown deadline={new Date('2023-12-24 18:00:00')} {...{ testID: 'countdown' }}></Countdown>)
    expect(screen.getByTestId('countdown')).toBeOnTheScreen()
  })
})
