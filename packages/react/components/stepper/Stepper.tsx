import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { TypographyColor } from '@/objects'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { Text } from '../text'
import { Title } from '../title'
import { StepperProps, StepperRef } from './StepperProps'

type CurrentStepType = { label: number | null; step: number }
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
  const classesSteps = hashClass(styled, clsx('stepper-items'))
  const [currentStep, setCurrentStep] = React.useState<CurrentStepType>({ label: null, step: 1 })

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
          if (child?.props?.current && child?.props?.label) {
            haveCurrentStep = true
            setCurrentStep({ step: index + 1, label: child?.props?.label })
          }
        })
        if (!haveCurrentStep) setCurrentStep({ step: 1, label: children[0]?.props?.label })
      } else {
        setCurrentStep({ label: null, step: 1 })
      }
    }
  }, [children])

  return (
    <div ref={ref} id={id} className={classes} {...others}>
      <Text level={2} className='step-count' typo={[TypographyColor.TEXT_MAIN_FADE]}>
        Étape {currentStep.step}sur {nbChild}
      </Text>
      <Title level={5} className='step-label' key={`step-${currentStep.step}-${currentStep.label}`}>
        {currentStep.label}
      </Title>
      <div className={classesSteps}>{children}</div>
    </div>
  )
})

Stepper.displayName = ComponentName.Stepper
export default Stepper
