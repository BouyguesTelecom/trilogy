import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { Align, DirectionEnum, TypographyColor } from '@/objects'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { FlexBox } from '../flex-box'
import { Icon, IconName } from '../icon'
import { Text } from '../text'
import { Title } from '../title'
import { StepperProps, StepperRef } from './StepperProps'
import { GapSize } from '@/components/columns'

type CurrentStepType = { label: number | null; step: number; icon: IconName | null }
/**
 * Stepper Component
 * @param centered Center the stepper
 * @param children {ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className Additional CSS Classes
 */
const Stepper = React.forwardRef<StepperRef, StepperProps>(({ className, id, children, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('stepper-container', className))
  const classesSteps = hashClass(styled, clsx('stepper-items'))
  const [currentStep, setCurrentStep] = React.useState<CurrentStepType>({ label: null, step: 1, icon: null })

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
            setCurrentStep({ step: index + 1, label: child?.props?.label, icon: child?.props?.iconName })
          }
        })
        if (!haveCurrentStep)
          setCurrentStep({ step: 1, label: children[0]?.props?.label, icon: children[0]?.props?.iconName })
      } else {
        setCurrentStep({ label: null, step: 1, icon: null })
      }
    }
  }, [children])

  return (
    <FlexBox gap={GapSize.EIGHT} direction={DirectionEnum.COLUMN}>
      <div className='stepper-wrapper'>
        <div className='stepper-item is-done' data-label='Récapitulatif'>
          <div className='step-label'>Récapitulatif</div>
        </div>
        <div className='stepper-item is-done' data-label='Compléments'>
          <div className='step-label'>Compléments</div>
        </div>
        <div className='stepper-item is-current' data-label='Coordonnées'>
          <div className='step-label'>Coordonnées</div>
        </div>
        <div className='stepper-item' data-label='Livraison'>
          <div className='step-label'>Livraison</div>
        </div>
        <div className='stepper-item' data-label='Confirmation'>
          <div className='step-label'>Confirmation</div>
        </div>
        <div className='step-count'>
          <p className='text'>1/5</p>
        </div>
      </div>

      <h1>New</h1>

      <div ref={ref} id={id} className={classes} {...others}>
        <Text level={2} className='step-count' typo={[TypographyColor.TEXT_PLACEHOLDER]}>
          Étape {currentStep.step} sur {nbChild}
        </Text>
        <FlexBox align={Align.CENTER}>
          {currentStep.icon && <Icon name={currentStep.icon} size='small' />}
          <Title level={5} className='step-label' key={`step-${currentStep.step}-${currentStep.label}`}>
            {currentStep.label}
          </Title>
        </FlexBox>

        <div className={classesSteps}>{children}</div>
      </div>
    </FlexBox>
  )
})

Stepper.displayName = ComponentName.Stepper
export default Stepper
