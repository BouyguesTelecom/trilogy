import { Text } from '@/components/text'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { StepperProps, StepperRef } from './StepperProps'
import { useStepper } from './hooks/useStepper'

/**
 * Stepper Component
 * @param centered Center the stepper
 * @param children {ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className Additionnal CSS Classes
 */
const Stepper = React.forwardRef<StepperRef, StepperProps>(({ className, id, children, ...others }, ref) => {
  const classes = hashClass(clsx('stepper-wrapper', className))
  const { currentStep, nbChild } = useStepper({ children })

  return (
    <div ref={ref} id={id} className={classes} {...others}>
      {children}
      <div className='step-count'>
        <Text>
          {currentStep}/{nbChild}
        </Text>
      </div>
    </div>
  )
})

Stepper.displayName = ComponentName.Stepper
export default Stepper
