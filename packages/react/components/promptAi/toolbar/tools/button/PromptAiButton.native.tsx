import { ComponentName } from '@/components/enumsComponentsName'
import { RadiusValues } from '@/components/image'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getRadiusStyle } from '@/objects/facets/Radius'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { PromptAiButtonNativeRef, PromptAiButtonProps } from './PromptAiButtonProps'

const PromptAiButton = React.forwardRef<PromptAiButtonNativeRef, PromptAiButtonProps>(
  ({ disabled, active, onClick, ...others }, ref) => {
    const styles = StyleSheet.create({
      button: {
        height: 36,
        minWidth: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getRadiusStyle(RadiusValues.SMALL),
        backgroundColor: getColorStyle(TrilogyColor[disabled ? 'DISABLED_FADE' : active ? 'MAIN' : 'BACKGROUND']),
      },
    })

    return <Pressable onPress={onClick} ref={ref} style={styles.button} disabled={disabled} {...others} />
  },
)

PromptAiButton.displayName = ComponentName.PromptAiButton
export default PromptAiButton
