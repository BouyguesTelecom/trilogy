import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { PromptProps, PromptRef } from './PromptProps'
import { PromptProvider } from './context'

const Prompt = React.forwardRef<PromptRef, PromptProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('prompt_ai', className))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
  }

  return (
    <PromptProvider>
      <form ref={ref} className={classes} {...others} onSubmit={handleSubmit} />
    </PromptProvider>
  )
})

Prompt.displayName = ComponentName.Prompt
export default Prompt
