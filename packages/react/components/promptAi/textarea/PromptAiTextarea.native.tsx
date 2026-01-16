import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer'
import Textarea from '@/components/textarea/Textarea.native'
import React, { useContext, useEffect, useImperativeHandle, useRef } from 'react'
import { TextInput, ViewStyle } from 'react-native'
import { PromptAiContext } from '../context'
import { PromptAiTextareaNativeRef, PromptAiTextareaProps } from './PromptAiTextareaProps'

const PromptAiTextarea = React.forwardRef<PromptAiTextareaNativeRef, PromptAiTextareaProps>(({ ...others }, ref) => {
  const { setIsReadyToSubmit, setIsFocused, isSend, setIsSend } = useContext(PromptAiContext)
  const textareaRef = useRef<TextInput>(null)

  useImperativeHandle(ref, () => textareaRef.current as TextInput)

  const style: ViewStyle = {
    maxHeight: 200,
    paddingHorizontal: SpacerSize.FOUR,
    paddingTop: SpacerSize.FOUR,
  }

  useEffect(() => {
    setIsReadyToSubmit(!!others.value?.length)
  }, [others.value, setIsReadyToSubmit])

  useEffect(() => {
    if (isSend) {
      textareaRef.current?.blur()
      setIsSend(false)
    }
  }, [isSend])

  return (
    <Textarea
      ref={textareaRef}
      placeholder='Placeholder'
      {...{
        ...others,
        style,
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false),
      }}
    />
  )
})

PromptAiTextarea.displayName = ComponentName.PromptAiTextarea
export default PromptAiTextarea
