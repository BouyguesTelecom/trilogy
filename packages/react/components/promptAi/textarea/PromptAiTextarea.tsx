import { ComponentName } from '@/components/enumsComponentsName'
import { Textarea } from '@/components/textarea'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { PromptAiTextareaProps, PromptAiTextareaRef } from './PromptAiTextareaProps'

const PromptAiTextarea = React.forwardRef<PromptAiTextareaRef, PromptAiTextareaProps>(
  ({ className, ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('prompt_ai-textarea', className))

    const handleTextareaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
      const textarea = e.target as HTMLTextAreaElement
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }

    return (
      <Textarea
        ref={ref}
        className={classes}
        placeholder='Placeholder'
        {...{ onInput: handleTextareaChange, ...others }}
      />
    )
  },
)

PromptAiTextarea.displayName = ComponentName.PromptAiTextarea
export default PromptAiTextarea
