import { Button } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { PromptAiButtonProps, PromptAiButtonRef } from './PromptAiButtonProps'

const PromptAiButton = React.forwardRef<PromptAiButtonRef, PromptAiButtonProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('prompt_ai-toolbar-tool', className))

  return <Button ref={ref} variant='GHOST' className={classes} {...others} />
})

PromptAiButton.displayName = ComponentName.PromptAiButton
export default PromptAiButton
