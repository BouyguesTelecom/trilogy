import { ButtonVariant } from '@/components/button'
import Button from '@/components/button/Button.native'
import { ComponentName } from '@/components/enumsComponentsName'
import { IconName } from '@/components/icon'
import React from 'react'
import { PromptAiInputFileNativeRef, PromptAiInputFileProps } from './PromptAiInputFileProps'

const PromptAiInputFile = React.forwardRef<PromptAiInputFileNativeRef, PromptAiInputFileProps>(({ ...others }, ref) => {
  return <Button iconName={IconName.ATTACHMENT} variant={ButtonVariant.GHOST} {...others} ref={ref} />
})

PromptAiInputFile.displayName = ComponentName.PromptAiInputFile
export default PromptAiInputFile
