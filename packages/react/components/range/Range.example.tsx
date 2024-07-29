import React from 'react'
import { Range} from './index'

const RangeExample: React.ReactNode =
  <Range
    gap={0}
    idMax="max"
    idMin="min"
    label="Ceci est un label"
    labelValueCursorMax="€"
    labelValueCursorMin="€"
    max={100}
    min={0}
    nameMax="max"
    nameMin="min"
    valueCursorMax={50}
    valueCursorMin={0}
  />

export default RangeExample;
