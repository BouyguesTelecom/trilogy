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
    const { isTyping, setIsSpeech, isDisabled } = useContext(PromptContext)
    const isDisable = isDisabled || disabled

    const styles = StyleSheet.create({
      icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 36,
      },
    })

    const handleClick = () => {
      onClick?.()
      setIsSpeech(true)
    }

    if (isTyping) return null

    return (
      <PromptButton ref={ref} onClick={handleClick} active={isListening} rounded {...others}>
        <Icon
          size={IconSize.SMALLER}
          color={isDisable ? TrilogyColor.DISABLED : isListening ? TrilogyColor.BACKGROUND : TrilogyColor.MAIN}
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
