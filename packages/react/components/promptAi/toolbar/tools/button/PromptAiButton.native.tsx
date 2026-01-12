import { ButtonVariant } from '@/components/button'
import Button from '@/components/button/Button.native'
import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'
import { PromptAiButtonNativeRef, PromptAiButtonProps } from './PromptAiButtonProps'

const PromptAiButton = React.forwardRef<PromptAiButtonNativeRef, PromptAiButtonProps>(({ ...others }, ref) => {
  return <Button ref={ref} variant={ButtonVariant.GHOST} {...others} />
})

PromptAiButton.displayName = ComponentName.PromptAiButton
export default PromptAiButton
