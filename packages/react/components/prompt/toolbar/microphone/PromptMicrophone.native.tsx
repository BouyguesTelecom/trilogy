import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { TrilogyColor } from '@/objects'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { PromptContext } from '../../context'
import PromptButton from '../tools/button/PromptButton.native'
import { PromptMicrophoneNativeRef, PromptMicrophoneProps } from './PromptMicrophoneProps'

const PromptMicrophone = React.forwardRef<PromptMicrophoneNativeRef, PromptMicrophoneProps>(
  ({ isListening, onClick, disabled = false, ...others }, ref) => {
    const { isTyping, setIsFocused, isFocused } = useContext(PromptContext)

    const styles = StyleSheet.create({
      icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 36,
      },
    })

    const handleClick = () => {
      onClick?.()
      setIsFocused(false)
    }

    if (isTyping && isFocused) return null

    return (
      <PromptButton ref={ref} disabled={disabled} onClick={handleClick} active={isListening} rounded {...others}>
        <Icon
          size={IconSize.SMALLER}
          color={isListening ? TrilogyColor.BACKGROUND : TrilogyColor.MAIN}
          name={IconName.MICRO}
          {...{
            style: [styles.icon],
          }}
        />
      </PromptButton>
    )
  },
)

PromptMicrophone.displayName = ComponentName.PromptMicrophone
export default PromptMicrophone
