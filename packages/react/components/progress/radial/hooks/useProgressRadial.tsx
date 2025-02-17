import React from 'react'

import { isServer } from '@/helpers/isServer'
import { getColorStyle } from '@/objects/facets/Color'

interface IParams {
  value: number
  secondValue: number
}

export const useProgressRadial = ({ value, secondValue }: IParams) => {
  if (isServer) {
    return {
      styleSSR: updateBackgroundStyle(value, secondValue),
    }
  }

  const [firstProgressCurrentValue, setFirstProgressCurrentValue] = React.useState(0)
  const [secondProgressCurrentValue, setSecondProgressCurrentValue] = React.useState(0)

  const progressRadialRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    let animationFrameId: any

    // Reset the current values whenever the provided percent or secondPercent change
    setFirstProgressCurrentValue(0)
    setSecondProgressCurrentValue(0)
    updateBackgroundStyle(value, secondValue, progressRadialRef) // if percent or secondPercent are 0, update immediately

    const frame = () => {
      setFirstProgressCurrentValue((value) => {
        return value < value ? value + 1 : value
      })
      setSecondProgressCurrentValue((value) => {
        return value < secondValue ? value + 1 : value
      })
      animationFrameId = requestAnimationFrame(frame)
    }

    animationFrameId = requestAnimationFrame(frame)

    // Cleanup
    return () => cancelAnimationFrame(animationFrameId)
  }, [value, secondValue])

  React.useEffect(() => {
    updateBackgroundStyle(firstProgressCurrentValue, secondProgressCurrentValue, progressRadialRef)
  }, [firstProgressCurrentValue, secondProgressCurrentValue, progressRadialRef])

  return {
    progressRadialRef,
  }
}

const updateBackgroundStyle = (
  firstValue: number,
  secondValue: number,
  progressRadialRef?: React.RefObject<HTMLDivElement>,
) => {
  const progressRadial = progressRadialRef?.current
  const firstProgressDegree = (360 * firstValue) / 100
  const secondProgressDegree = (360 * secondValue) / 100

  // Ensure the second progress starts where the first ends
  const secondProgressStartDegree = firstProgressDegree

  let styleBackground
  styleBackground = `radial-gradient(circle at center, white 58%, transparent 58.1%),`
  styleBackground += `conic-gradient(#0C7B91 0 ${firstProgressDegree}deg, ${getColorStyle(
    'MAIN',
  )} ${secondProgressStartDegree}deg ${secondProgressStartDegree + secondProgressDegree}deg, gainsboro ${
    secondProgressStartDegree + secondProgressDegree
  }deg 360deg)`

  if (progressRadial) progressRadial.style.background = styleBackground

  return {
    background: `radial-gradient(circle at center, white 58%, transparent 58.1%), conic-gradient(#0C7B91 0 ${firstProgressDegree}deg, ${getColorStyle(
      'MAIN',
    )} ${secondProgressStartDegree}deg ${secondProgressStartDegree + secondProgressDegree}deg, gainsboro ${
      secondProgressStartDegree + secondProgressDegree
    }deg 360deg)`,
  }
}
