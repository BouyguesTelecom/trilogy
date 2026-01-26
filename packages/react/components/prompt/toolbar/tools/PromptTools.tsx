import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { PromptToolsProps, PromptToolsRef } from './PromptToolsProps'

const PromptTools = React.forwardRef<PromptToolsRef, PromptToolsProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('prompt-toolbar-tools', className))
  return <div ref={ref} className={classes} {...others} />
})

PromptTools.displayName = ComponentName.PromptTools
export default PromptTools
