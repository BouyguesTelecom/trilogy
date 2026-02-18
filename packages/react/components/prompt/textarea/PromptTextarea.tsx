import { ComponentName } from '@/components/enumsComponentsName'
import { Textarea } from '@/components/textarea'
import { TextareaChangeEvent } from '@/components/textarea/TextareaProps'
import clsx from 'clsx'
import React, { useContext, useEffect } from 'react'
import { PromptContext } from '../context'
import { PromptTextareaProps, PromptTextareaRef } from './PromptTextareaProps'

/**
 * PromptTextarea component - Auto-resizing textarea for prompt input
 * @param value {string} Current value of the textarea
 * @param onChange {Function} Change event handler
 * @param placeholder {string} Placeholder text
 * @param disabled {boolean} Whether the textarea is disabled
 * @param readOnly {boolean} Whether the textarea is read-only
 * @param className {string} Additional CSS classes (ONLY FOR WEB)
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 */
const PromptTextarea = React.forwardRef<PromptTextareaRef, PromptTextareaProps>(
  ({ className, value, onChange, disabled, readOnly, ...others }, ref) => {
    const classes = clsx('prompt-textarea', className)
    const { setText, setIsTyping, isDisabled, isReadonly } = useContext(PromptContext)

    const isDisable = isDisabled || disabled
    const isReadOnly = isReadonly || readOnly

    const handleTextareaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
      const textarea = e.target as HTMLTextAreaElement
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }

    const handleChange = (e: TextareaChangeEvent) => {
      onChange?.(e)
      setIsTyping(true)
    }

    useEffect(() => {
      setText(value ?? '')
      if (!value) setIsTyping(false)
    }, [value, setIsTyping, setText])

    return (
      <Textarea
        disabled={isDisable}
        value={value}
        ref={ref}
        className={classes}
        onChange={handleChange}
        {...{ onInput: handleTextareaChange, readOnly: isReadOnly, ...others }}
      />
    )
  },
)

PromptTextarea.displayName = ComponentName.PromptTextarea
export default PromptTextarea
