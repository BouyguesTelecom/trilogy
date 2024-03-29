import React from 'react'
import { Section, Range } from '@trilogy-ds/react/components'

export const RangeScreen = (): JSX.Element => {
  return (
    <Section>
      <Range
        min={0}
        max={100}
        labelValueCursorMin={'€'}
        labelValueCursorMax={'€'}
        valueCursorMin={0}
        valueCursorMax={50}
        label='This is the label'
        idMin='min'
        idMax='max'
        nameMax='max'
        nameMin='min'
        onChangeMin={(e) => console.log(e)}
        gap={0}
      />
    </Section>
  )
}
