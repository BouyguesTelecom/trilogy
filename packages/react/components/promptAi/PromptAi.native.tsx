import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { ComponentName } from '../enumsComponentsName'
import { PromptAiNativeRef, PromptAiProps } from './PromptAiProps'
import { PromptAiContext } from './context'

const PromptAi = React.forwardRef<PromptAiNativeRef, PromptAiProps>(({ onSubmit, ...others }, ref) => {
  const { setHandleSubmit, handleSubmit } = useContext(PromptAiContext)

  useEffect(() => {
    if (onSubmit) {
      setHandleSubmit(() => () => onSubmit())
    }
  }, [onSubmit, setHandleSubmit])

  return <View ref={ref} {...others} style={{ borderWidth: 1, borderRadius: 8 }} />
})

PromptAi.displayName = ComponentName.PromptAi
export default PromptAi
