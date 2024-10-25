import React from 'react'
import { Stepper, StepperStep } from './index'

const StepperExample: React.ReactNode = (
  <Stepper centered>
    <StepperStep done label='Récapitulatif' step={1} />
    <StepperStep done label='Compléments' step={2} />
    <StepperStep current label='Coordonnées' step={3} />
    <StepperStep label='Livraison' step={4} />
    <StepperStep label='Confirmation' step={5} />
  </Stepper>
)

export default StepperExample

