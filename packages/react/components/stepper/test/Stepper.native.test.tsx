import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Stepper from '../Stepper'
import Step from '../step'

jest.useFakeTimers()

describe('Stepper', () => {
  it('should render without error', () => {
    render(
      <Stepper>
        <Step active label='Recup' />
        <Step label='Compléments' />
        <Step error label='Coordonate' />
      </Stepper>,
    )
    expect(screen.getByText('Recup')).toBeOnTheScreen()
    expect(screen.queryByText('Compléments')).not.toBeOnTheScreen()
    expect(screen.queryByText('Coordonate')).not.toBeOnTheScreen()
    expect(screen.getByText('1/3')).toBeOnTheScreen()
  })
})
