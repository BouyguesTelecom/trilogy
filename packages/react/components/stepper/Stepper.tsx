import * as React from 'react'
import clsx from 'clsx'
import { StepperProps } from './StepperProps'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { Text } from '@/components/text'

/**
 * Stepper Component
 * @param centered Center the stepper
 * @param children {ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className Additionnal CSS Classes
 */
const Stepper = React.forwardRef((props: StepperProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { className, id, children, ...others } = props
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
    <div id={id} ref={ref} className={classes} {...others}>
      {children}
      <div className='step-count'>
        <Text>
          {currentStep}/{nbChild}
        </Text>
      </div>
    </div>
  )
})
export default Stepper
