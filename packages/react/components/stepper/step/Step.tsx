import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { StepProps, StepRef } from './StepProps'

/**
 * Stepper Step Component
 * @param active {boolean} Active step
 * @param current {boolean} Current step
 * @param done {boolean} Step done
 * @param error {boolean} display error step
 * @param children {ReactNode} Stepper Step Children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param iconName {IconName | IconNameValues} display icon
 * @param label {string} Step label
 */
const Step = React.forwardRef<StepRef, StepProps>(
  ({ className, id, active, current, done, label, error, ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const classesStepLabel = hashClass(styled, clsx('step-label'))

    const classes = hashClass(
      styled,
      clsx(
        'stepper-item',
        active && is('active'),
        current && is('current'),
        done && is('done'),
        error && is('error'),
        className,
      ),
    )

    return (
      <div ref={ref} id={id} className={classes} data-label={label} {...others}>
        <div className={classesStepLabel} />
      </div>
    )
  },
)

Step.displayName = ComponentName.Step
export default Step
