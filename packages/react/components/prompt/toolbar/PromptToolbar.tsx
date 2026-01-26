import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { PromptToolbarProps, PromptToolbarRef } from './PromptToolbarProps'

const PromptToolbar = React.forwardRef<PromptToolbarRef, PromptToolbarProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('prompt_ai-toolbar', className))
  return <div ref={ref} className={classes} {...others} />
})

PromptToolbar.displayName = ComponentName.PromptToolbar
export default PromptToolbar
