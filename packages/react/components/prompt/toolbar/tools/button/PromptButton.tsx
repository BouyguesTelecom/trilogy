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
