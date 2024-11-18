import React from 'react'

import { InputChangeEventHandlerWeb } from '@/components/range/RangeProps'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

interface IParams {
  max: number
  valueCursorMin?: number
  valueCursorMax?: number
  onChangeMin?: InputChangeEventHandlerWeb
  onChangeMax?: InputChangeEventHandlerWeb
  nameMin?: string
  nameMax?: string
  gap: number
}

export const useRange = ({
  valueCursorMin,
  valueCursorMax,
  max,
  gap,
  onChangeMin,
  onChangeMax,
  nameMin,
  nameMax,
}: IParams) => {
  try {
    const [cursorMin, setCursorMin] = React.useState<number>(valueCursorMin ?? 0)
    const [cursorMax, setCursorMax] = React.useState<number>(valueCursorMax ?? max)

    const refTrack = React.useRef(null)

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
          inputName: nameMin,
          inputValue: cursorMin,
        })
      }
    }, [onChangeMin, nameMin, cursorMin])

    const handleMouseUpMax = React.useCallback(() => {
      if (onChangeMax) {
        onChangeMax({
          inputName: nameMax,
          inputValue: cursorMax,
        })
      }
    }, [onChangeMax, nameMax, cursorMax])

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
      setCursorMin(valueCursorMin || 0)
    }, [valueCursorMin])

    React.useEffect(() => {
      setCursorMax(valueCursorMax || max)
    }, [valueCursorMax])

    return {
      refTrack,
      cursorMax,
      cursorMin,
      handleMouseUpMin,
      handleChangeCursorMin,
      handleMouseUpMax,
      handleChangeCursorMax,
    }
  } catch {
    return { cursorMax: valueCursorMin ?? 0, cursorMin: valueCursorMax ?? max }
  }
}
