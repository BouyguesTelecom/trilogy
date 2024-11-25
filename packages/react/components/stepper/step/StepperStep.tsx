import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { IconSize } from '@/components/icon'
import Icon from '@/components/icon/Icon'
import { StepperStepMarkup, StepperStepMarkupValues } from '@/components/stepper/step/StepperStepEnum'
import { StepperStepProps } from '@/components/stepper/step/StepperStepProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

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
const StepperStep = React.forwardRef(
  (
    { children, className, active, markup, current, done, label, iconName, error, ...others }: StepperStepProps,
    ref: React.LegacyRef<any>,
  ) => {
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

    const isCorrectMarkup = (stringMarkup: StepperStepMarkup | StepperStepMarkupValues) => {
      if (
        stringMarkup in StepperStepMarkup ||
        Object.values(StepperStepMarkup).includes(stringMarkup as StepperStepMarkup)
      )
        return true
    }

    const Tag = markup && isCorrectMarkup(markup) ? markup : StepperStepMarkup.DIV

    return (
      <Tag ref={ref} className={classes} data-label={label} {...others}>
        <div className={classesStepLabel}>
          {label || children}
          {!done && iconName && <Icon name={iconName && iconName} className={'step-icon'} size={IconSize.MEDIUM} />}
        </div>
      </Tag>
    )
  },
)

StepperStep.displayName = ComponentName.StepperStep
export default StepperStep
