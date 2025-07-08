import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getColorStyle, TrilogyColor } from '@/objects'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { RangeProps, RangeRef } from './RangeProps'

/**
 * Range Component
 * @param simple {boolean} display one cursor
 * @param unit {string} display unit of values
 * - -------------------------- MOBILE PROPERTIES -------------------------------
 * @param min {number} min length
 * @param max {number} max length
 * @param label {string} label of range
 * @param labelValueCursorMin {string} label to display next to value display
 * @param value {number[]} array of values
 * @param onChange {function} on change cursors
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param gap {number} space max between min and max cursor
 * @param onChangeMin {function} on change min cursor
 * @param onChangeMax {function} on change max cursor
 * @param value {number} only for slider
 * @param onChange {function} on change cursor (works with simple prop)
 * @param className {string} Additional CSS Classes
 * @param id {string} id for Range
 * @param valueMin {number} value min cursor
 * @param valueMax {number} value max cursor
 * @param name {string} input name
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
        track.style.background = `linear-gradient(to right, ${getColorStyle(TrilogyColor.MAIN_FADE)} ${
          (cursorMin / max) * 100
        }% , ${getColorStyle(TrilogyColor.MAIN)} ${(cursorMin / max) * 100}% , ${getColorStyle(TrilogyColor.MAIN)} ${
          (cursorMax / max) * 100
        }%, ${getColorStyle(TrilogyColor.MAIN_FADE)} ${(cursorMax / max) * 100}%) `
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
        <div className={hashClass(styled, clsx('range'))}>
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
