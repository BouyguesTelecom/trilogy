import { IconSize } from '@/components/icon'
import Icon from '@/components/icon/Icon'
import { StepProps } from '@/components/stepper/step/StepProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

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
 * @param label {string} Step label
 */
const Step = ({ className, id, active, current, done, label, iconName, error, ...others }: StepProps) => {
  const classesStepLabel = hashClass(clsx('step-label'))

  const classes = hashClass(
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
    <div id={id} className={classes} data-label={label} {...others}>
      <div className={classesStepLabel}>
        {label}
        {!done && iconName && <Icon name={iconName && iconName} className={'step-icon'} size={IconSize.MEDIUM} />}
      </div>
    </div>
  )
}

export default Step
