import { render, screen } from '@testing-library/react-native'
import React from 'react'

import Stepper from '@/components/stepper/Stepper'
import StepperStep from '@/components/stepper/step/StepperStep'

jest.useFakeTimers()

describe('Stepper', () => {
  it('should render without error', () => {
    render(
      <Stepper>
        <StepperStep active label='Recup' step={1} />
        <StepperStep label='Compléments' step={2} />
        <StepperStep error label='Coordonate' step={3} />
      </Stepper>,
    )
    expect(screen.getByText('Recup')).toBeOnTheScreen()
    expect(screen.queryByText('Compléments')).not.toBeOnTheScreen()
    expect(screen.queryByText('Coordonate')).not.toBeOnTheScreen()
    expect(screen.getByText('1/3')).toBeOnTheScreen()
  })
})
