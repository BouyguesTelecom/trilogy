import { ComponentName } from '@/components/enumsComponentsName'
import { Textarea } from '@/components/textarea'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useContext, useEffect } from 'react'
import { PromptContext } from '../context'
import { PromptTextareaProps, PromptTextareaRef } from './PromptTextareaProps'

const PromptTextarea = React.forwardRef<PromptTextareaRef, PromptTextareaProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('prompt-textarea', className))
  const { setText } = useContext(PromptContext)

  const handleTextareaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const textarea = e.target as HTMLTextAreaElement
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  useEffect(() => {
    setText(others?.value ?? '')
  }, [others?.value])

  return <Textarea ref={ref} className={classes} {...{ onInput: handleTextareaChange, ...others }} />
})

PromptTextarea.displayName = ComponentName.PromptTextarea
export default PromptTextarea
