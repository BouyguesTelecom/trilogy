import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Checkbox from '../Checkbox.native'

jest.useFakeTimers()

describe('Checkbox component', () => {
  it('renders label correctly', () => {
    render(<Checkbox id={'test'} />)
    expect(screen.getByTestId('test')).toBeOnTheScreen()
  })
})
