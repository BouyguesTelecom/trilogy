import * as React from 'react'
import clsx from 'clsx'
import { StepperProps, StepperRef } from './StepperProps'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { Text } from '@/components/text'
import { ComponentName } from '../enumsComponentsName'

/**
 * Stepper Component
 * @param centered Center the stepper
 * @param children {ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className Additional CSS Classes
 */
const Stepper = React.forwardRef<StepperRef, StepperProps>(({ className, id, children, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('stepper-wrapper', className))
  const [currentStep, setCurrentStep] = React.useState<number>(1)

  const nbChild = React.useMemo<number>(() => {
    if (children && Array.isArray(children)) return children.length
    if (children && !Array.isArray(children)) return 1
    return 0
  }, [children])

  React.useEffect(() => {
    if (children) {
      if (Array.isArray(children)) {
        let haveCurrentStep = false
        children.map((child, index) => {
          if (child?.props?.current) {
            haveCurrentStep = true
            setCurrentStep(index + 1)
          }
        })
        if (!haveCurrentStep) setCurrentStep(1)
      } else {
        setCurrentStep(1)
      }
    }
  }, [children])

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
