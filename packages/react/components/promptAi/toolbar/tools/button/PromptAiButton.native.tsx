import { ComponentName } from '@/components/enumsComponentsName'
import { RadiusValues } from '@/components/image'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getRadiusStyle } from '@/objects/facets/Radius'
import React, { useCallback, useState } from 'react'
import { Pressable, ViewStyle } from 'react-native'
import { PromptAiButtonNativeRef, PromptAiButtonProps } from './PromptAiButtonProps'

const PromptAiButton = React.forwardRef<PromptAiButtonNativeRef, PromptAiButtonProps>(
  ({ disabled, active, onClick, ...others }, ref) => {
    const [isFocus, setIsFocus] = useState<boolean>(false)

    const onPressIn = useCallback(() => {
      setIsFocus(true)
    }, [])

    const onPressOut = useCallback(() => {
      setIsFocus(false)
    }, [])

    const styles: ViewStyle = {
      height: 36,
      minWidth: 36,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: getRadiusStyle(RadiusValues.SMALL),
      backgroundColor: getColorStyle(
        TrilogyColor[disabled ? 'DISABLED_FADE' : active ? 'MAIN' : isFocus ? 'MAIN_FADE' : 'BACKGROUND'],
      ),
    }

    return (
      <Pressable
        onPress={onClick}
        ref={ref}
        style={styles}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled}
        {...others}
      />
    )
  },
)

PromptAiButton.displayName = ComponentName.PromptAiButton
export default PromptAiButton
