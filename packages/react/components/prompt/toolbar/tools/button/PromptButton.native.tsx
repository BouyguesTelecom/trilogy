import { ComponentName } from '@/components/enumsComponentsName'
import { RadiusValues } from '@/components/image'
import { PromptContext } from '@/components/prompt/context'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getRadiusStyle } from '@/objects/facets/Radius'
import React, { useContext } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { PromptButtonNativeRef, PromptButtonProps } from './PromptButtonProps'

const PromptButton = React.forwardRef<PromptButtonNativeRef, PromptButtonProps>(
  ({ disabled, active, onClick, rounded, readOnly, ...others }, ref) => {
    const { isDisabled, isReadonly } = useContext(PromptContext)
    const isDisable = isDisabled || disabled
    const isReadOnly = isReadonly || readOnly

    const styles = StyleSheet.create({
      button: {
        height: 36,
        minWidth: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: rounded ? 36 : getRadiusStyle(RadiusValues.SMALL),
        backgroundColor: getColorStyle(
          isDisable ? TrilogyColor?.DISABLED_FADE : active ? TrilogyColor.MAIN : 'transparent',
        ),
      },
    })

    const handleClick = () => {
      if (onClick && !isReadOnly && !isDisable) {
        onClick()
      }
    }

    return <Pressable onPress={handleClick} ref={ref} style={styles.button} disabled={isDisable} {...others} />
  },
)

PromptButton.displayName = ComponentName.PromptButton
export default PromptButton
