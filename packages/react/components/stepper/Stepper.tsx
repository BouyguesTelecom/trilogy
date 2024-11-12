import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { has } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { StepperProps } from './StepperProps'

/**
 * Stepper Component
 * @param centered Center the stepper
 * @param children {ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className Additionnal CSS Classes
 */
const Stepper = React.forwardRef((props: StepperProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { className, centered, children, ...others } = props

  const { styled } = useTrilogyContext()

  const classes = hashClass(clsx('stepper-wrapper', className))
  const centerClasses = hashClass(clsx('section', has('text-centered'), className))
  const [currentStep, setCurrentStep] = React.useState<number>(0)

  const nbChild = React.useMemo<number>(() => {
    if (children && Array.isArray(children)) return children.length
    if (children && !Array.isArray(children)) return 1
    return 0
  }, [children])

  React.useEffect(() => {
    if (children) {
      if (Array.isArray(children)) {
        let haveCurrentStep = false
        children.map((child) => {
          if (child?.props?.current) {
            haveCurrentStep = true
            setCurrentStep(child.props.step)
          }
        })
        if (!haveCurrentStep) setCurrentStep(1)
      } else {
        setCurrentStep(1)
      }
    }
  }, [children])

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
})
export default Stepper
