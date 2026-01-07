import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { PromptAiProps, PromptAiRef } from './PromptAiProps'

const PromptAi = React.forwardRef<PromptAiRef, PromptAiProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('prompt_ai', className))
  return <div ref={ref} className={classes} {...others} />
})

PromptAi.displayName = ComponentName.PromptAi
export default PromptAi
