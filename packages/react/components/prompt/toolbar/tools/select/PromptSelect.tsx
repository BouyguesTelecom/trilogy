import { ComponentName } from '@/components/enumsComponentsName'
import { PromptContext } from '@/components/prompt/context'
import { Select } from '@/components/select'
import { SelectProps } from '@/components/select/SelectProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { PromptSelectRef } from './PromptSelectProps'

const PADDING_SELECT_OPTION = 58

const PromptSelect = React.forwardRef<PromptSelectRef, SelectProps>(
  ({ className, disabled, readOnly, ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const { isDisabled, isReadonly } = useContext(PromptContext)

    const isDisable = isDisabled || disabled
    const isReadOnly = isReadonly || readOnly
    const classes = hashClass(styled, clsx('prompt-toolbar-tool', className))

    const refSpan = useRef<HTMLSpanElement>(null)
    const refSelect = useRef<HTMLSelectElement>(null)

    const [span, setSpan] = useState<string>('')
    const [width, setWidth] = useState<number>()

    useImperativeHandle(ref, () => refSelect.current as HTMLSelectElement)

    useEffect(() => {
      if (refSpan.current && refSpan.current.clientWidth !== 0) {
        setWidth(refSpan.current.clientWidth + PADDING_SELECT_OPTION)
      }
    }, [refSpan, span])

    useEffect(() => {
      if (refSelect.current) {
        const { options } = refSelect.current
        const selectedOptions = [...options].find((elm) => elm.value === others.selected)
        if (selectedOptions?.text) setSpan(selectedOptions?.text)
      }
    }, [others.selected])

    return (
      <>
        <Select
          disabled={isDisable}
          ref={refSelect}
          className={classes}
          {...{
            ...others,
            style: {
              width: width ?? undefined,
            },
            onMouseDown: (e: MouseEvent) => {
              if (isDisable || isReadOnly) return e.preventDefault()
            },
          }}
          onChange={(e) => {
            if (others.onChange) others.onChange(e)
            if (e.target.selectedOptions) {
              setSpan(e.target.selectedOptions[0].text)
            }
          }}
        />
        <span ref={refSpan} style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap' }}>
          {span}
        </span>
      </>
    )
  },
)

PromptSelect.displayName = ComponentName.PromptSelect
export default PromptSelect
