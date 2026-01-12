import { ComponentName } from '@/components/enumsComponentsName'
import Textarea from '@/components/textarea/Textarea.native'
import React from 'react'
import { PromptAiTextareaNativeRef, PromptAiTextareaProps } from './PromptAiTextareaProps'

const PromptAiTextarea = React.forwardRef<PromptAiTextareaNativeRef, PromptAiTextareaProps>(({ ...others }, ref) => {
  return <Textarea ref={ref} placeholder='Placeholder' {...others} />
})

PromptAiTextarea.displayName = ComponentName.PromptAiTextarea
export default PromptAiTextarea
