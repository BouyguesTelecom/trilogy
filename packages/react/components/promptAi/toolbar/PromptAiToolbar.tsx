import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { PromptAiToolbarProps, PromptAiToolbarRef } from './PromptAiToolbarProps'

const PromptAiToolbar = React.forwardRef<PromptAiToolbarRef, PromptAiToolbarProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('prompt_ai-toolbar', className))
  return <div ref={ref} className={classes} {...others} />
})

PromptAiToolbar.displayName = ComponentName.PromptAiToolbar
export default PromptAiToolbar
