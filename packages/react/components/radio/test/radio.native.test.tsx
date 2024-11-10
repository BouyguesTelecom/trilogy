import { render, screen } from '@testing-library/react-native'
import React from 'react'
import Radio from '../Radio.native'

jest.useFakeTimers()

describe('Radio', () => {
  it('renders correctly', () => {
    render(<Radio label='Test radio' />)
    expect(screen.getByText('Test radio')).toBeOnTheScreen()
  })
})
