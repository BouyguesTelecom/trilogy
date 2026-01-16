import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName } from '@/components/icon'
import React from 'react'
import PromptAiButton from '../button/PromptAiButton.native'
import { PromptAiInputFileNativeRef, PromptAiInputFileProps } from './PromptAiInputFileProps'

const PromptAiInputFile = React.forwardRef<PromptAiInputFileNativeRef, PromptAiInputFileProps>(({ ...others }, ref) => {
  return (
    <PromptAiButton {...others} ref={ref}>
      <Icon
        name={IconName.ATTACHMENT}
        {...{
          style: {
            flexDirection: 'row',
            justifyContent: 'center',
            width: 36,
          },
        }}
      />
    </PromptAiButton>
  )
})

PromptAiInputFile.displayName = ComponentName.PromptAiInputFile
export default PromptAiInputFile
