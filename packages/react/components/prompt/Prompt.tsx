import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useContext } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { PromptProps, PromptRef } from './PromptProps'
import { PromptContext, PromptProvider } from './context'

const PromptElm = React.forwardRef<PromptRef, PromptProps>(({ className, testId, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const { isReadonly, isDisabled } = useContext(PromptContext)
  const classes = hashClass(styled, clsx('prompt', className))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
  }

  return (
    <form
      data-testid={testId}
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
 * Prompt Component - Form wrapper for chat-like or AI prompt interfaces
 * @param readOnly {boolean} Read-only state (disables editing)
 * @param disabled {boolean} Disabled state
 * @param children {ReactNode} Child components (Input, Textarea, toolbar buttons, etc.)
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
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
