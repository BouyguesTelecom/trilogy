import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import React from 'react'
import { PromptAiInputFileProps, PromptAiInputFileRef } from './PromptAiInputFileProps'

const PromptAiInputFile = React.forwardRef<PromptAiInputFileRef, PromptAiInputFileProps>(
  ({ className, onChange, ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('button is-ghost prompt_ai-toolbar-tool icon_only', className))

    return (
      <label htmlFor='promptAiUpload'>
        <span ref={ref} className={classes} {...others}>
          <Icon name={IconName.ATTACHMENT} />
        </span>
        <input type='file' style={{ display: 'none' }} id='promptAiUpload' onChange={onChange} />
      </label>
    )
  },
)

PromptAiInputFile.displayName = ComponentName.PromptAiInputFile
export default PromptAiInputFile
