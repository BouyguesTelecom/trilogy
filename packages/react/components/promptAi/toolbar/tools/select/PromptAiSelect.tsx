import { ComponentName } from '@/components/enumsComponentsName'
import { Select } from '@/components/select'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { PromptAiSelectProps, PromptAiSelectRef } from './PromptAiSelectProps'

const PromptAiSelect = React.forwardRef<PromptAiSelectRef, PromptAiSelectProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('prompt_ai-toolbar-tool', className))

  return <Select ref={ref} className={classes} {...others} />
})

PromptAiSelect.displayName = ComponentName.PromptAiSelect
export default PromptAiSelect
