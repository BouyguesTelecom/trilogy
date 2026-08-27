import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Otp from '@/components/otp/Otp'

jest.useFakeTimers()

describe('Otp', () => {
  it('renders', () => {
    render(<Otp label='label' />)
    expect(screen.getByText('label')).toBeOnTheScreen()
  })
})
