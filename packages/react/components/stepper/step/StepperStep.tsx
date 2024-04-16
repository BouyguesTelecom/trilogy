import React from "react"
import clsx from "clsx"
import { StepperStepProps } from "./StepperStepProps"
import { StepperStepMarkup, StepperStepMarkupValues } from "./StepperStepEnum"
import { is } from "../../../services/classify"
import { hashClass } from "../../../helpers/hashClassesHelpers"
import { useTrilogyContext } from "../../../context/index"
import Icon from "../../icon/Icon"
import { IconSize } from "../../icon/IconEnum"

/**
 * Stepper Step Component
 * @param children {ReactNode} Stepper Step Children
 * @param className {string} Additionnal CSS Classes
 * @param active {boolean} Active step
 * @param markup {StepperStepMarkup} Markup for Step - P|SPAN|DIV|A
 * @param current {boolean} Current step
 * @param done {boolean} Step done
 * @param label {string} Step label
 * @param step {number|string} Step text circle
 */
const StepperStep = ({
  children,
  className,
  active,
  markup,
  current,
  done,
  label,
  iconName,
  error,
  ...others
}: StepperStepProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classesStepLabel = hashClass(styled, clsx('step-label'))

  const classes = hashClass(
    styled,
    clsx('stepper-item', active && is('active'), current && is('current'), done && is('done'), error && is('error'), className),
  )

  /**
   * If no markup return div
   */

  const isCorrectMarkup = (stringMarkup: StepperStepMarkup | StepperStepMarkupValues) => {
    if (
      stringMarkup in StepperStepMarkup ||
      Object.values(StepperStepMarkup).includes(stringMarkup as StepperStepMarkup)
    )
      return true
  }

  const Tag = markup && isCorrectMarkup(markup) ? markup : StepperStepMarkup.DIV

  return (
    <Tag className={classes} data-label={label} {...others}>
      <div className={classesStepLabel}>
        {label || children}
        {
          !done && iconName && <Icon name={iconName && iconName} className={'step-icon'} size={IconSize.MEDIUM} />
        }
      </div>
    </Tag>
  )
}

export default StepperStep
