import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer'
import Textarea from '@/components/textarea/Textarea.native'
import React, { useContext, useEffect } from 'react'
import { ViewStyle } from 'react-native'
import { PromptAiContext } from '../context'
import { PromptAiTextareaNativeRef, PromptAiTextareaProps } from './PromptAiTextareaProps'

const PromptAiTextarea = React.forwardRef<PromptAiTextareaNativeRef, PromptAiTextareaProps>(({ ...others }, ref) => {
  const { setIsReadyToSubmit } = useContext(PromptAiContext)

  const style: ViewStyle = {
    maxHeight: 200,
    paddingHorizontal: SpacerSize.FOUR,
    paddingTop: SpacerSize.FOUR,
  }

  useEffect(() => {
    setIsReadyToSubmit(!!others.value?.length)
  }, [others.value, setIsReadyToSubmit])

  return (
    <Textarea
      ref={ref}
      placeholder='Placeholder'
      {...{
        ...others,
        style,
      }}
    />
  )
})

PromptAiTextarea.displayName = ComponentName.PromptAiTextarea
export default PromptAiTextarea
