import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { RangeProps, RangeRef } from './RangeProps'

/**
 * Range Component
 * @param min {number} Minimum value
 * @param max {number} Maximum value
 * @param label {string} Label of range
 * @param simple {boolean} Display single cursor (slider mode)
 * @param unit {string} Unit displayed next to values
 * @param name {string} Input name
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 * @param value {number} Current value (for simple/slider mode)
 * @param valueMin {number} Current min cursor value
 * @param valueMax {number} Current max cursor value
 * @param gap {number} Maximum gap allowed between min and max cursor
 * @param onChange {InputChangeEventHandlerWeb} Callback for single cursor change
 * @param onChangeMin {InputChangeEventHandlerWeb} Callback when min cursor changes
 * @param onChangeMax {InputChangeEventHandlerWeb} Callback when max cursor changes
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param value {number[]} Current values array [min, max]
 * @param onChange {InputChangeEventHandlerNative} Callback for cursor changes
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
      onChange,
      name,
      gap = 0,
      simple,
      value,
      testId,
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()
    const refTrack = React.useRef(null)

    const [cursorMin, setCursorMin] = React.useState<number>(valueMin ?? 0)
    const [cursorMax, setCursorMax] = React.useState<number>(simple ? value || 0 : valueMax ?? max)

    React.useEffect(() => {
      if (refTrack.current) {
        const track = refTrack.current as HTMLElement
        track.style.background = `linear-gradient(to right, var(--color-main-fade) ${
          (cursorMin / max) * 100
        }% , var(--color-main) ${(cursorMin / max) * 100}% , var(--color-main) ${
          (cursorMax / max) * 100
        }%, var(--color-main-fade) ${(cursorMax / max) * 100}%) `
      }
    }, [cursorMin, cursorMax])

    React.useEffect(() => {
      setCursorMin(valueMin || 0)
    }, [valueMin])

    React.useEffect(() => {
      if (!simple) setCursorMax(valueMax || max)
    }, [valueMax, simple])

    React.useEffect(() => {
      if (simple && value !== undefined) setCursorMax(value)
    }, [value, simple])

    const handleChangeCursorMin = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < cursorMax - gap) setCursorMin(Number(e.target.value))
      },
      [cursorMax, cursorMin],
    )

    const handleChangeCursorMax = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) >= cursorMin + gap) setCursorMax(Number(e.target.value))
      },
      [cursorMax, cursorMin],
    )

    const handleMouseUpMin = React.useCallback(() => {
      if (onChangeMin) {
        onChangeMin({
          inputName: name,
          inputValue: cursorMin,
        })
      }
    }, [onChangeMin, name, cursorMin])

    const handleMouseUpMax = React.useCallback(() => {
      if (onChangeMax && !simple) {
        onChangeMax({
          inputName: name,
          inputValue: cursorMax,
        })
      }

      if (onChange && simple) {
        onChange({
          inputName: name,
          inputValue: cursorMax,
        })
      }
    }, [onChangeMax, name, cursorMax, onChange, simple])

    return (
      <div ref={ref} id={id} className={hashClass(styled, clsx('range-container', className))}>
        <label className={hashClass(styled, clsx('range-label'))}>{label}</label>
        <div className={hashClass(styled, clsx('range'))} data-testid={testId}>
          <div ref={refTrack} className={hashClass(styled, clsx('range-track'))}></div>
          {!simple && (
            <input
              className={hashClass(styled, clsx('range-cursor range-cursor-min'))}
              onTouchEnd={handleMouseUpMin}
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
          )}
          <input
            className={hashClass(styled, clsx('range-cursor', !simple && 'range-cursor-max'))}
            onTouchEnd={handleMouseUpMax}
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
        <div className={hashClass(styled, clsx('range-values'))}>
          {!simple && (
            <div>
              <span className={hashClass(styled, clsx('range-value-min'))}>{cursorMin}</span>
              {unit && <span> {unit}</span>}
            </div>
          )}
          <div>
            <span className={hashClass(styled, clsx(simple ? 'range-value' : 'range-value-max'))}>{cursorMax}</span>
            {unit && <span> {unit}</span>}
          </div>
        </div>
      </div>
    )
  },
)

Range.displayName = ComponentName.Range
export default Range
