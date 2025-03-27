import { useRange } from '@/components/range/hooks/useRange'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { RangeProps, RangeRef } from './RangeProps'

/**
 * Range Component
 * - -------------------------- MOBILE PROPERTIES -------------------------------
 * @param min {number} min length
 * @param max {number} max length
 * @param label {string} label of range
 * @param labelValueCursorMin {string} label to display next to value display
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param gap {number} space max between min and max cursor
 * @param onChangeMin {function} on change min cursor
 * @param onChangeMax {function} on change max cursor
 */
const Range = React.forwardRef<RangeRef, RangeProps>(
  (
    {
      className,
      id = React.useId(),
      min,
      max,
      label,
      valueMin,
      valueMax,
      unit,
      onChangeMin,
      onChangeMax,
      name,
      gap = 0,
    },
    ref,
  ): JSX.Element => {
    const {
      cursorMax,
      cursorMin,
      refTrack,
      handleMouseUpMin,
      handleChangeCursorMin,
      handleMouseUpMax,
      handleChangeCursorMax,
    } = useRange({ min, max, valueMin, valueMax, onChangeMin, onChangeMax, gap, name })

    return (
      <div id={id} className={hashClass(clsx('range-container', className))} ref={ref}>
        <label className={hashClass(clsx('range-label'))}>{label}</label>
        <div className={hashClass(clsx('range'))}>
          <div ref={refTrack} className={hashClass(clsx('range-track'))}></div>
          <input
            className={hashClass(clsx('range-cursor range-cursor-min'))}
            onMouseUp={handleMouseUpMin}
            onChange={handleChangeCursorMin}
            value={cursorMin}
            type='range'
            min={min}
            max={max}
            name={name}
            id={`${id}-min`}
            aria-label={label}
          />
          <input
            className={hashClass(clsx('range-cursor range-cursor-max'))}
            onMouseUp={handleMouseUpMax}
            onChange={handleChangeCursorMax}
            value={cursorMax}
            type='range'
            min={min}
            max={max}
            name={name}
            id={`${id}-max`}
            aria-label={label}
          />
        </div>
        <div className={hashClass(clsx('range-values'))}>
          <div>
            <span className={hashClass(clsx('range-value-min'))}>{cursorMin}</span>
            {unit && <span> {unit}</span>}
          </div>
          <div>
            <span className={hashClass(clsx('range-value-max'))}>{cursorMax}</span>
            {unit && <span> {unit}</span>}
          </div>
        </div>
      </div>
    )
  },
)

Range.displayName = ComponentName.Range
export default Range
