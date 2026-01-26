import { ComponentName } from '@/components/enumsComponentsName'
import { RadiusValues } from '@/components/image'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getRadiusStyle } from '@/objects/facets/Radius'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { PromptButtonNativeRef, PromptButtonProps } from './PromptButtonProps'

const PromptButton = React.forwardRef<PromptButtonNativeRef, PromptButtonProps>(
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

PromptButton.displayName = ComponentName.PromptButton
export default PromptButton
