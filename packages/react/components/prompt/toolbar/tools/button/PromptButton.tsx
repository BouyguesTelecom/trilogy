import { Button, ButtonVariant } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { PromptContext } from '@/components/prompt/context'
import { useTrilogyContext } from '@/context'
import { OnClickEvent } from '@/events/OnClickEvent'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/index'
import clsx from 'clsx'
import React, { useContext } from 'react'
import { PromptButtonProps, PromptButtonRef } from './PromptButtonProps'

/**
 * PromptButton component - Customizable button for prompt toolbar
 * @param variant {ButtonVariant} Button variant style (primary, secondary, ghost, etc.)
 * @param rounded {boolean} Whether the button should have rounded corners
 * @param disabled {boolean} Whether the button is disabled
 * @param readOnly {boolean} Whether the button is read-only
 * @param onClick {Function} Click event handler
 * @param children {ReactNode} Button content
 * @param className {string} Additional CSS classes (ONLY FOR WEB)
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 */
const PromptButton = React.forwardRef<PromptButtonRef, PromptButtonProps>(
  ({ className, variant, rounded, disabled, readOnly, onClick, ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const { isDisabled, isReadonly } = useContext(PromptContext)

    const isDisable = isDisabled || disabled
    const isReadOnly = isReadonly || readOnly
    const classes = hashClass(
      styled,
      clsx('prompt-toolbar-tool', rounded && is('rounded'), isDisable && is('disabled'), className),
    )

    const handleClick = (e: OnClickEvent) => {
      if (!isDisable && !isReadOnly && onClick) {
        onClick(e)
      }
    }

    return (
      <Button
        disabled={isDisable}
        ref={ref}
        variant={variant ?? ButtonVariant.GHOST}
        className={classes}
        onClick={handleClick}
        {...others}
      />
    )
  },
)

PromptButton.displayName = ComponentName.PromptButton
export default PromptButton
