import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName } from '@/components/icon'
import { PromptContext } from '@/components/prompt/context'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import React, { MouseEvent, useContext } from 'react'
import { PromptInputFileProps, PromptInputFileRef } from './PromptInputFileProps'

const PromptInputFile = React.forwardRef<PromptInputFileRef, PromptInputFileProps>(
  ({ className, onChange, disabled, readOnly, ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const { isDisabled, isReadonly } = useContext(PromptContext)

    const isDisable = isDisabled || disabled
    const isReadOnly = isReadonly || readOnly
    const classes = hashClass(
      styled,
      clsx('button is-ghost prompt-toolbar-tool icon_only', isDisable && is('disabled'), className),
    )

    const onClick = (e: MouseEvent) => {
      if (isDisable || isReadOnly) e.preventDefault()
    }

    return (
      <label htmlFor='promptUpload'>
        <span ref={ref} className={classes} {...others}>
          <Icon name={IconName.PARPERCLIP} />
        </span>
        <input
          disabled={isDisable}
          readOnly={isReadOnly}
          type='file'
          style={{ display: 'none' }}
          id='promptUpload'
          onChange={onChange}
          onClick={onClick}
        />
      </label>
    )
  },
)

PromptInputFile.displayName = ComponentName.PromptInputFile
export default PromptInputFile
