import clsx from 'clsx'
import React from 'react'

import { useRange } from '@/components/range/hook/useRange'
import { RangeProps } from '@/components/range/RangeProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Range Component
 * - -------------------------- MOBILE PROPERTIES -------------------------------
 * @param min {number} min length
 * @param max {number} max length
 * @param label {string} label of range
 * @param labelValueCursorMin {string} label to display next to value display
 * @param labelValueCursorMax {string} label to display next to value display
 * @param onChange {function}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param nameMin {string} name input min
 * @param idMin {string} id input min
 * @param nameMax{string} name input max
 * @param idMax {string} id input max
 * @param gap {number} space max between min and max cursor
 * @param valueCursorMin {number} number of input min
 * @param valueCursorMax {number} number of input max
 * @param onChangeMin {function} on change min cursor
 * @param onChangeMax {function} on change max cursor
 * @param testId {string} Test Id for Test Integration
 */
const Range = (
  {
    min,
    max,
    label,
    valueCursorMin,
    valueCursorMax,
    labelValueCursorMin,
    labelValueCursorMax,
    onChangeMin,
    onChangeMax,
    nameMin,
    idMin,
    nameMax,
    idMax,
    testId,
    gap = 0,
  }: RangeProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element => {
  const {
    refTrack,
    cursorMax,
    cursorMin,
    handleMouseUpMin,
    handleChangeCursorMin,
    handleMouseUpMax,
    handleChangeCursorMax,
  } = useRange({ valueCursorMin, valueCursorMax, max, gap, onChangeMin, onChangeMax, nameMin, nameMax })

  return (
    <div data-testid={testId} className={hashClass(clsx('range-container'))} ref={ref}>
      <label className={hashClass(clsx('range-label'))}>{label}</label>
      <div className={hashClass(clsx('range'))}>
        <div ref={refTrack} className={hashClass(clsx('range-track'))}></div>
        <input
          data-testid={`${testId}_min`}
          className={hashClass(clsx('range-cursor range-cursor-min'))}
          onMouseUp={handleMouseUpMin}
          onChange={handleChangeCursorMin}
          value={cursorMin}
          type='range'
          min={min}
          max={max}
          name={nameMin}
          id={idMin}
          aria-label={label}
        />
        <input
          data-testid={`${testId}_max`}
          className={hashClass(clsx('range-cursor range-cursor-max'))}
          onMouseUp={handleMouseUpMax}
          onChange={handleChangeCursorMax}
          value={cursorMax}
          type='range'
          min={min}
          max={max}
          name={nameMax}
          id={idMax}
          aria-label={label}
        />
      </div>
      <div className={hashClass(clsx('range-values'))}>
        <div>
          <span className={hashClass(clsx('range-value-min'))}>{cursorMin}</span>
          {labelValueCursorMin && <span> {labelValueCursorMin}</span>}
        </div>
        <div>
          <span className={hashClass(clsx('range-value-max'))}>{cursorMax}</span>
          {labelValueCursorMax && <span> {labelValueCursorMax}</span>}
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(Range)
