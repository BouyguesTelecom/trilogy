import { InputChangeEventHandlerWeb } from '@/components/range/RangeProps'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React from 'react'

interface IProps {
  min: number
  max: number
  valueMin?: number
  valueMax?: number
  onChangeMin?: InputChangeEventHandlerWeb
  onChangeMax?: InputChangeEventHandlerWeb
  gap: number
  name?: string
}

export const useRange = ({ valueMin, valueMax, max, gap, name, onChangeMin, onChangeMax }: IProps) => {
  try {
    const [cursorMin, setCursorMin] = React.useState<number>(valueMin ?? 0)
    const [cursorMax, setCursorMax] = React.useState<number>(valueMax ?? max)
    const refTrack = React.useRef(null)

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

    return {
      cursorMax,
      cursorMin,
      refTrack,
      handleMouseUpMin,
      handleChangeCursorMin,
      handleMouseUpMax,
      handleChangeCursorMax,
    }
  } catch {
    return {
      cursorMax: valueMax ?? max,
      cursorMin: valueMin,
    }
  }
}
