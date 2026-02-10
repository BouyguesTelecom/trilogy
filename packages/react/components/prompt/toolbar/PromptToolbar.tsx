import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { PromptToolbarProps, PromptToolbarRef } from './PromptToolbarProps'

/**
 * PromptToolbar component - Container for prompt action buttons and tools
 * @param children {ReactNode} Toolbar content (buttons, tools, etc.)
 * @param className {string} Additional CSS classes (ONLY FOR WEB)
 * @param testId {string} Test Id for Test Integration
 */
const PromptToolbar = React.forwardRef<PromptToolbarRef, PromptToolbarProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('prompt-toolbar', className))
  return <div ref={ref} className={classes} {...others} />
})

PromptToolbar.displayName = ComponentName.PromptToolbar
export default PromptToolbar
