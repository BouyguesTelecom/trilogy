import { StepperProps } from '@/components/stepper/StepperProps'
import { useStepper } from '@/components/stepper/hooks/useStepper'
import { Text } from '@/components/text'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'

/**
 * Stepper Component
 * @param centered Center the stepper
 * @param children {ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className Additionnal CSS Classes
 */
const Stepper = ({ className, id, children, ...others }: StepperProps) => {
  const classes = hashClass(clsx('stepper-wrapper', className))
  const { currentStep, nbChild } = useStepper({ children })

  return (
    <div id={id} className={classes} {...others}>
      {children}
      <div className='step-count'>
        <Text>
          {currentStep}/{nbChild}
        </Text>
      </div>
    </div>
  )
}
export default Stepper
