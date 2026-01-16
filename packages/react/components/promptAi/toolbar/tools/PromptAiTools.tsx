import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { PromptAiToolsProps, PromptAiToolsRef } from './PromptAiToolsProps'

const PromptAiTools = React.forwardRef<PromptAiToolsRef, PromptAiToolsProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('prompt_ai-toolbar-tools', className))
  return <div ref={ref} className={classes} {...others} />
})

PromptAiTools.displayName = ComponentName.PromptAiTools
export default PromptAiTools
