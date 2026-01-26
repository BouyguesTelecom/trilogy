import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName } from '@/components/icon'
import React from 'react'
import { StyleSheet } from 'react-native'
import PromptButton from '../button/PromptButton.native'
import { PromptInputFileNativeRef, PromptInputFileProps } from './PromptInputFileProps'

const PromptInputFile = React.forwardRef<PromptInputFileNativeRef, PromptInputFileProps>(
  ({ onChange, ...others }, ref) => {
    const styles = StyleSheet.create({
      icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 36,
      },
    })

    return (
      <PromptButton
        ref={ref}
        onClick={() => {
          if (onChange) onChange()
        }}
        {...others}
      >
        <Icon
          name={IconName.ATTACHMENT}
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
