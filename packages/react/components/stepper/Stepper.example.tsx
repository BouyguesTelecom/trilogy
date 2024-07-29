import React from 'react'
import { Stepper, StepperStep } from './index'

const StepperExample: React.ReactNode =
  <Stepper>
    <StepperStep
      done
      label="Récapitulatif"
      step={1}
    />
    <StepperStep
      done
      label="Compléments"
      step={2}
    />
    <StepperStep
      done
      label="Coordonnées"
      step={3}
    />
    <StepperStep
      current
      label="Livraison"
      step={4}
    />
    <StepperStep
      label="Confirmation"
      step={5}
    />
  </Stepper>

export default StepperExample
