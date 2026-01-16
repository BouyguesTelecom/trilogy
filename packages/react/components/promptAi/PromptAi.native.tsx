import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getRadiusStyle } from '@/objects/facets/Radius'
import React, { useContext } from 'react'
import { View, ViewStyle } from 'react-native'
import { ComponentName } from '../enumsComponentsName'
import { RadiusValues } from '../image'
import { PromptAiNativeRef, PromptAiProps } from './PromptAiProps'
import { PromptAiContext } from './context'

const PromptAi = React.forwardRef<PromptAiNativeRef, PromptAiProps>(({ ...others }, ref) => {
  const { isFocused } = useContext(PromptAiContext)

  const styles: ViewStyle = {
    borderWidth: isFocused ? 2 : 1,
    borderRadius: getRadiusStyle(RadiusValues.MEDIUM),
    borderColor: getColorStyle(TrilogyColor[isFocused ? 'MAIN' : 'STROKE']),
    margin: isFocused ? -1 : undefined,
  }

  return <View ref={ref} {...others} style={styles} />
})

PromptAi.displayName = ComponentName.PromptAi
export default PromptAi
