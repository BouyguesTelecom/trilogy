import { ComponentName } from '@/components/enumsComponentsName'
import { Select } from '@/components/select'
import { SelectProps } from '@/components/select/SelectProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { PromptAiSelectRef } from './PromptAiSelectProps'

const PADDING_SELECT_OPTION = 58

const PromptAiSelect = React.forwardRef<PromptAiSelectRef, SelectProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('prompt_ai-toolbar-tool', className))
  const refSpan = useRef<HTMLSpanElement>(null)
  const [span, setSpan] = useState<string>('')
  const [width, setWidth] = useState<number>()

  useEffect(() => {
    if (refSpan.current && refSpan.current.clientWidth !== 0) {
      setWidth(refSpan.current.clientWidth + PADDING_SELECT_OPTION)
    }
  }, [refSpan, span])

  return (
    <>
      <Select
        ref={ref}
        className={classes}
        {...{
          ...others,
          style: {
            width: width ?? undefined,
          },
        }}
        onChange={(e) => {
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
})

PromptAiSelect.displayName = ComponentName.PromptAiSelect
export default PromptAiSelect
