import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer'
import Textarea from '@/components/textarea/Textarea.native'
import { TextareaChangeEvent } from '@/components/textarea/TextareaProps'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useContext, useEffect, useImperativeHandle, useRef } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { PromptContext } from '../context'
import { PromptTextareaNativeRef, PromptTextareaProps } from './PromptTextareaProps'

const PromptTextarea = React.forwardRef<PromptTextareaNativeRef, PromptTextareaProps>(
  ({ value, onChange, ...others }, ref) => {
    const { setText, setIsFocused, isSend, setIsSend, setIsTyping, isSpeech, setIsSpeech } = useContext(PromptContext)
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

    const handleChange = (e: TextareaChangeEvent) => {
      onChange?.(e)
      if (!isSpeech && e.textareaValue.trim().length > 0) setIsTyping(true)
      setIsSpeech(false)
    }

    useEffect(() => {
      setText(value ?? '')
      if (!value) setIsTyping(false)
    }, [value, setIsTyping, setText])

    useEffect(() => {
      if (isSend) {
        textareaRef.current?.blur()
        setIsSend(false)
      }
    }, [isSend, setIsSend])

    return (
      <Textarea
        value={value}
        ref={textareaRef}
        onChange={handleChange}
        {...{
          ...others,
          style: style.textarea,
          onFocus: () => setIsFocused(true),
          onBlur: () => setIsFocused(false),
        }}
      />
    )
  },
)

PromptTextarea.displayName = ComponentName.PromptTextarea
export default PromptTextarea
