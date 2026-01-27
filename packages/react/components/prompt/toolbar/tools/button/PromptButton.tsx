import { Button, ButtonVariant } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/index'
import clsx from 'clsx'
import React from 'react'
import { PromptButtonProps, PromptButtonRef } from './PromptButtonProps'

const PromptButton = React.forwardRef<PromptButtonRef, PromptButtonProps>(({ className, rounded, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('prompt-toolbar-tool', rounded && is('rounded'), className))

  return <Button ref={ref} variant={ButtonVariant.GHOST} className={classes} {...others} />
})

PromptButton.displayName = ComponentName.PromptButton
export default PromptButton
