import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { PromptAiProps, PromptAiRef } from './PromptAiProps'
import { PromptAiProvider } from './context'

const PromptAi = React.forwardRef<PromptAiRef, PromptAiProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('prompt_ai', className))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
  }

  return (
    <PromptAiProvider>
      <form ref={ref} className={classes} {...others} onSubmit={handleSubmit} />
    </PromptAiProvider>
  )
})

PromptAi.displayName = ComponentName.PromptAi
export default PromptAi
