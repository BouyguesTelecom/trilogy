import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useContext } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { PromptProps, PromptRef } from './PromptProps'
import { PromptContext, PromptProvider } from './context'

const PromptElm = React.forwardRef<PromptRef, PromptProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const { isReadonly, isDisabled } = useContext(PromptContext)
  const classes = hashClass(styled, clsx('prompt', className))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
  }

  return (
    <form
      aria-disabled={isDisabled}
      aria-readonly={isReadonly}
      ref={ref}
      className={classes}
      onSubmit={handleSubmit}
      {...others}
    />
  )
})

/**
 * Prompt component that provides a form wrapper for chat-like interfaces
 * @param readOnly {boolean} Whether the prompt is in read-only mode
 * @param disabled {boolean} Whether the prompt is disabled
 * @param children {ReactNode} Child components (textarea, toolbar, etc.)
 * @param className {string} Additional CSS classes (ONLY FOR WEB)
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 */
const Prompt = React.forwardRef<PromptRef, PromptProps>(
  ({ readOnly = false, disabled = false, className, ...others }, ref) => {
    return (
      <PromptProvider isReadonly={readOnly} isDisabled={disabled}>
        <PromptElm ref={ref} className={className} {...others} />
      </PromptProvider>
    )
  },
)

Prompt.displayName = ComponentName.Prompt
export default Prompt
