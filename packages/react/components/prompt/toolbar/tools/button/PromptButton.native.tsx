import { ComponentName } from '@/components/enumsComponentsName'
import { PromptContext } from '@/components/prompt/context'
import React, { useContext } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { PromptButtonNativeRef, PromptButtonProps } from '@/components/prompt/toolbar/tools/button/PromptButtonProps'
import { getColorStyle } from "@/helpers/color";
import { TrilogyColor } from "@/interfaces/Color";
import { getRadiusStyle } from "@/helpers/radius";
import { Radius } from "@/interfaces/Radius";

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
        borderRadius: rounded ? 36 : getRadiusStyle(Radius.SMALL),
        backgroundColor: getColorStyle(
          isDisable && (others as any)?.isSubmit
            ? TrilogyColor?.DISABLED
            : !(others as any)?.isActive && (others as any)?.isSubmit
            ? 'DISABLED_FADE'
            : active
            ? TrilogyColor.MAIN
            : 'transparent',
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
