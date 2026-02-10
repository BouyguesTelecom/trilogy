import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { PromptContext } from '@/components/prompt/context'
import { TrilogyColor } from '@/objects'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import PromptButton from '../button/PromptButton.native'
import { PromptInputFileNativeRef, PromptInputFileProps } from './PromptInputFileProps'

const PromptInputFile = React.forwardRef<PromptInputFileNativeRef, PromptInputFileProps>(
  ({ onChange, disabled, readOnly, ...others }, ref) => {
    const { isDisabled } = useContext(PromptContext)
    const isDisable = isDisabled || disabled

    const styles = StyleSheet.create({
      icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 36,
      },
    })

    return (
      <PromptButton
        disabled={disabled}
        readOnly={readOnly}
        ref={ref}
        onClick={() => {
          if (onChange) onChange()
        }}
        {...others}
      >
        <Icon
          color={isDisable ? TrilogyColor.DISABLED : TrilogyColor.MAIN}
          size={IconSize.SMALLER}
          name={IconName.PARPERCLIP}
          {...{
            style: styles.icon,
          }}
        />
      </PromptButton>
    )
  },
)

PromptInputFile.displayName = ComponentName.PromptInputFile
export default PromptInputFile
