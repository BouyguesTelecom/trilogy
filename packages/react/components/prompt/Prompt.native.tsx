import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getRadiusStyle } from '@/objects/facets/Radius'
import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ComponentName } from '../enumsComponentsName'
import { RadiusValues } from '../image'
import { PromptNativeRef, PromptProps } from './PromptProps'
import { PromptContext, PromptProvider } from './context'

const PromptElm = React.forwardRef<PromptNativeRef, PromptProps>(({ ...others }, ref) => {
  const { isFocused, isDisabled } = useContext(PromptContext)

  const styles = StyleSheet.create({
    view: {
      borderWidth: isFocused ? 2 : 1,
      borderRadius: getRadiusStyle(RadiusValues.SMALL),
      borderColor: getColorStyle(TrilogyColor[isFocused ? 'MAIN' : isDisabled ? 'DISABLED' : 'STROKE']),
      margin: isFocused ? -1 : undefined,
      backgroundColor: getColorStyle(TrilogyColor[isDisabled ? 'DISABLED_FADE' : 'BACKGROUND']),
    },
  })
  return <View ref={ref} style={styles.view} {...others} />
})

const Prompt = React.forwardRef<PromptNativeRef, PromptProps>(
  ({ disabled = false, readOnly = false, ...others }, ref) => {
    return (
      <PromptProvider isDisabled={disabled} isReadonly={readOnly}>
        <PromptElm ref={ref} {...others} />
      </PromptProvider>
    )
  },
)

Prompt.displayName = ComponentName.Prompt
export default Prompt
