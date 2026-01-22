import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getRadiusStyle } from '@/objects/facets/Radius'
import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ComponentName } from '../enumsComponentsName'
import { RadiusValues } from '../image'
import { PromptAiNativeRef, PromptAiProps } from './PromptAiProps'
import { PromptAiContext, PromptAiProvider } from './context'

const PromptAi = React.forwardRef<PromptAiNativeRef, PromptAiProps>(({ ...others }, ref) => {
  const { isFocused } = useContext(PromptAiContext)

  const styles = StyleSheet.create({
    view: {
      borderWidth: isFocused ? 2 : 1,
      borderRadius: getRadiusStyle(RadiusValues.SMALL),
      borderColor: getColorStyle(TrilogyColor[isFocused ? 'MAIN' : 'STROKE']),
      margin: isFocused ? -1 : undefined,
    },
  })
  return (
    <PromptAiProvider>
      <View ref={ref} style={styles.view} {...others} />
    </PromptAiProvider>
  )
})

PromptAi.displayName = ComponentName.PromptAi
export default PromptAi
