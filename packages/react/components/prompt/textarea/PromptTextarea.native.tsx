import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer'
import Textarea from '@/components/textarea/Textarea.native'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useContext, useEffect, useImperativeHandle, useRef } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { PromptContext } from '../context'
import { PromptTextareaNativeRef, PromptTextareaProps } from './PromptTextareaProps'

const PromptTextarea = React.forwardRef<PromptTextareaNativeRef, PromptTextareaProps>(({ ...others }, ref) => {
  const { setText, setIsFocused, isSend, setIsSend } = useContext(PromptContext)
  const textareaRef = useRef<TextInput>(null)
  useImperativeHandle(ref, () => textareaRef.current as TextInput)

  const style = StyleSheet.create({
    textarea: {
      maxHeight: 100,
      paddingHorizontal: SpacerSize.FOUR,
      paddingTop: SpacerSize.FOUR,
      color: getColorStyle(TrilogyColor.MAIN),
    },
  })

  useEffect(() => {
    setText(others?.value ?? '')
  }, [others?.value])

  useEffect(() => {
    if (isSend) {
      textareaRef.current?.blur()
      setIsSend(false)
    }
  }, [isSend])

  return (
    <Textarea
      ref={textareaRef}
      {...{
        ...others,
        style: style.textarea,
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false),
      }}
    />
  )
})

PromptTextarea.displayName = ComponentName.PromptTextarea
export default PromptTextarea
