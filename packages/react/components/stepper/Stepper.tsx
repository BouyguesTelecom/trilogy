import clsx from 'clsx'
import React from 'react'

import { useStepper } from '@/components/stepper/hook/useStepper'
import { StepperProps } from '@/components/stepper/StepperProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has } from '@/services/classify'

/**
 * Stepper Component
 * @param centered Center the stepper
 * @param children {ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className Additionnal CSS Classes
 */
const Stepper = ({ className, centered, children, ...others }: StepperProps, ref: React.Ref<HTMLDivElement>) => {
  const { currentStep, nbChild } = useStepper({ children })

  const classes = hashClass(clsx('stepper-wrapper', className))
  const centerClasses = hashClass(clsx('section', has('text-centered'), className))

  if (centered) {
    return (
      <section ref={ref} className={centerClasses}>
        <div className={classes} {...others}>
          {children}
          <div className='step-count'>
            {currentStep}/{nbChild}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div ref={ref} className={classes} {...others}>
      {children}
      <div className='step-count'>
        {currentStep}/{nbChild}
      </div>
    </div>
  )
}
export default React.forwardRef(Stepper)
