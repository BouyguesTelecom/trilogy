import React from 'react'
import clsx from 'clsx'
import { StepProps } from './StepProps'
import { is } from '@/services/classify'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import Icon from '@/components/icon/Icon'
import { IconSize } from '@/components/icon'

/**
 * Stepper Step Component
 * @param active {boolean} Active step
 * @param current {boolean} Current step
 * @param done {boolean} Step done
 * @param error {boolean} display error step
 * @param children {ReactNode} Stepper Step Children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param iconName {IconName | IconNameValues} display icon
 * @param markup {StepperStepMarkup} Markup for Step - P|SPAN|DIV|A
 * @param label {string} Step label
 * @param step {number|string} Step text circle
 */
const Step = React.forwardRef((props: StepProps, ref: React.LegacyRef<any>) => {
  const { className, id, active, current, done, label, iconName, error, ...others } = props

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
  /**
   * If no markup return div
   */

  return (
    <div id={id} ref={ref} className={classes} data-label={label} {...others}>
      <div className={classesStepLabel}>
        {label}
        {!done && iconName && <Icon name={iconName && iconName} className={'step-icon'} size={IconSize.MEDIUM} />}
      </div>
    </div>
  )
})

export default Step
