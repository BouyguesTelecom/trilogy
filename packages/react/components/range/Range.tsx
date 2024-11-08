import * as React from 'react'
import { getColorStyle, TrilogyColor } from '@/objects'
import { RangeProps } from './RangeProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'

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
const Range = ({
  className,
  id,
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
}: RangeProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const [cursorMin, setCursorMin] = React.useState<number>(valueMin ?? 0)
  const [cursorMax, setCursorMax] = React.useState<number>(valueMax ?? max)
  const refTrack = React.useRef(null)

  React.useEffect(() => {
    if (refTrack.current) {
      const track = refTrack.current as HTMLElement
      track.style.background = `linear-gradient(to right, ${getColorStyle(TrilogyColor.NEUTRAL_FADE)} ${
        (cursorMin / max) * 100
      }% , ${getColorStyle(TrilogyColor.MAIN_FADE)} ${(cursorMin / max) * 100}% , ${getColorStyle(
        TrilogyColor.MAIN_FADE,
      )} ${(cursorMax / max) * 100}%, ${getColorStyle(TrilogyColor.NEUTRAL_FADE)} ${(cursorMax / max) * 100}%) `
    }
  }, [cursorMin, cursorMax])

  React.useEffect(() => {
    setCursorMin(valueMin || 0)
  }, [valueMin])

  React.useEffect(() => {
    setCursorMax(valueMax || max)
  }, [valueMax])

  const handleChangeCursorMin = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (Number(e.target.value) < cursorMax - gap) setCursorMin(Number(e.target.value))
    },
    [cursorMax, cursorMin],
  )

  const handleChangeCursorMax = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (Number(e.target.value) > cursorMin + gap) setCursorMax(Number(e.target.value))
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
    if (onChangeMax) {
      onChangeMax({
        inputName: name,
        inputValue: cursorMax,
      })
    }
  }, [onChangeMax, name, cursorMax])

  return (
    <div id={id} className={hashClass(styled, clsx('range-container', className))}>
      <label className={hashClass(styled, clsx('range-label'))}>{label}</label>
      <div className={hashClass(styled, clsx('range'))}>
        <div ref={refTrack} className={hashClass(styled, clsx('range-track'))}></div>
        <input
          className={hashClass(styled, clsx('range-cursor range-cursor-min'))}
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
          className={hashClass(styled, clsx('range-cursor range-cursor-max'))}
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
        <div>
          <span className={hashClass(styled, clsx('range-value-min'))}>{cursorMin}</span>
          {unit && <span> {unit}</span>}
        </div>
        <div>
          <span className={hashClass(styled, clsx('range-value-max'))}>{cursorMax}</span>
          {unit && <span> {unit}</span>}
        </div>
      </div>
    </div>
  )
}

export default Range
