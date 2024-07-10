import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Countdown from '../Countdown'

jest.useFakeTimers()

describe('countdown component', () => {
  it('renders the children correctly', () => {
    render(<Countdown deadline={new Date('2023-12-24 18:00:00')} {...{ testID: 'countdown' }}></Countdown>)
    expect(screen.getByTestId('countdown')).toBeOnTheScreen()
  })
})
