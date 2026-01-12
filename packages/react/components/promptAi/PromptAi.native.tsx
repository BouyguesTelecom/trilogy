import React, { useState } from 'react'
import { View } from 'react-native'
import { ComponentName } from '../enumsComponentsName'
import { PromptAiNativeRef, PromptAiProps, PromptAiStatus } from './PromptAiProps'
import { IPromptAiFile, PromptAiContext } from './context'

const PromptAi = React.forwardRef<PromptAiNativeRef, PromptAiProps>(({ onSubmit, ...others }, ref) => {
  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false)
  const [files, setFiles] = useState<IPromptAiFile[]>([])
  const [status, setStatus] = useState<PromptAiStatus>(PromptAiStatus.STREAMING_OFF)

  const handleSubmit = () => {
    onSubmit && onSubmit()
  }

  return (
    <PromptAiContext.Provider
      value={{ isReadyToSubmit, setIsReadyToSubmit, files, setFiles, status, setStatus, handleSubmit }}
    >
      <View ref={ref} {...others} style={{ borderWidth: 1 }} />
    </PromptAiContext.Provider>
  )
})

PromptAi.displayName = ComponentName.PromptAi
export default PromptAi
