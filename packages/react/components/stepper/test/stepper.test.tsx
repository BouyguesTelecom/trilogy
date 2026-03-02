import * as React from 'react'
import { render } from '@testing-library/react'
import Stepper from '../Stepper'
import Step from '../step'

describe('Stepper', () => {
  it('should render without error', () => {
    const { getByTestId } = render(
      <Stepper data-testid='test-stepper'>
        <Step data-testid='test-step-1' label='Step 1' />
        <Step data-testid='test-step-2' label='Step 2' />
        <Step data-testid='test-step-3' label='Step 3' />
      </Stepper>,
    )
    const stepper = getByTestId('test-stepper')
    const step1 = getByTestId('test-step-1')
    const step2 = getByTestId('test-step-2')
    const step3 = getByTestId('test-step-3')
    expect(stepper).toBeInTheDocument()
    expect(step1).toBeInTheDocument()
    expect(step2).toBeInTheDocument()
    expect(step3).toBeInTheDocument()
  })

  it('should display the current step number', () => {
    const { getByText } = render(
      <Stepper>
        <Step current data-testid='test-step-1' label='Step 1' />
        <Step data-testid='test-step-2' label='Step 2' />
        <Step data-testid='test-step-3' label='Step 3' />
      </Stepper>,
    )
    const stepCount = getByText('1/3')
    expect(stepCount).toBeInTheDocument()
  })
})
