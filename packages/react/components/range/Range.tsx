import React, { ChangeEvent } from 'react'
import { getColorStyle, TrilogyColor } from '../../objects'
import { RangeProps } from './RangeProps'
import { hashClass } from '../../helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '../../context'

/**
 * Range Component
 * @param min {number} min length
 * @param max {number} max length
 * @param label {string} label of range
 * @param labelValueCursorMin {string} label to display next to value display
 * @param labelValueCursorMax {string} label to display next to value display
 * @param onChange {function}
 * @param nameMin {string} name input min
 * @param idMin {string} id input min
 * @param nameMax{string} name input max
 * @param idMax {string} id input max
 * @param gap {number} space max between min and max cursor
 * @param valueCursorMin {number} number of input min
 * @param valueCursorMax {number} number of input max
 */

const Range = ({
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
}: RangeProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const [cursorMin, setCursorMin] = React.useState<number>(valueCursorMin ?? 0)
  const [cursorMax, setCursorMax] = React.useState<number>(valueCursorMax ?? max)
  const refTrack = React.useRef(null)

  React.useEffect(() => {
    if (refTrack.current) {
      const track = refTrack.current as HTMLElement
      track.style.background = `linear-gradient(to right,
      ${getColorStyle(TrilogyColor.GREY_LIGHT)} ${(cursorMin / max) * 100}%,
      currentColor ${(cursorMin / max) * 100}%,
      currentColor ${(cursorMax / max) * 100}%,
      ${getColorStyle(TrilogyColor.GREY_LIGHT)} ${(cursorMax / max) * 100}%)`
    }
  }, [cursorMin, cursorMax])

  const handleChangeCursorMin = React.useCallback(
    (e:ChangeEvent<HTMLInputElement>) => {
      if (Number(e.target.value) < cursorMax - gap) setCursorMin(Number(e.target.value))
      if (onChangeMin) {
        onChangeMin({
          inputName: e.target.name,
          inputValue: e.target.value,
        })
      }
    },
    [cursorMax, cursorMin],
  )

  const handleChangeCursorMax = React.useCallback(
    (e:ChangeEvent<HTMLInputElement>) => {
      if (Number(e.target.value) > cursorMin + gap) setCursorMax(Number(e.target.value))
      if (onChangeMax) {
        onChangeMax({
          inputName: e.target.name,
          inputValue: e.target.value,
        })
      }
    },
    [cursorMax, cursorMin],
  )

  return (
    <div data-testid={testId} className={hashClass(styled, clsx('range-container'))}>
      <label className={hashClass(styled, clsx('range-label'))}>{label}</label>
      <div className={hashClass(styled, clsx('range'))}>
        <div ref={refTrack} className={hashClass(styled, clsx('range-track'))}></div>
        <input
          data-testid={`${testId}_min`}
          className={hashClass(styled, clsx('range-cursor range-cursor-min'))}
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
          className={hashClass(styled, clsx('range-cursor range-cursor-max'))}
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
      <div className={hashClass(styled, clsx('range-values'))}>
        <div>
          <span className={hashClass(styled, clsx('range-value-min'))}>{cursorMin}</span>
          {labelValueCursorMin && <span> {labelValueCursorMin}</span>}
        </div>
        <div>
          <span className={hashClass(styled, clsx('range-value-max'))}>{cursorMax}</span>
          {labelValueCursorMax && <span> {labelValueCursorMax}</span>}
        </div>
      </div>
    </div>
  )
}

export default Range
