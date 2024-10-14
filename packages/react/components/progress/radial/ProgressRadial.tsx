import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { ProgressRadialProps } from './ProgressRadialProps'
import { is } from '../../../services/index'
import { hashClass } from '../../../helpers'
import { useTrilogyContext } from '../../../context'
import { Title, TitleLevels } from '../../title'
import { Text, TextLevels } from '../../text'

const ProgressRadial = ({
  children,
  percent = 0,
  secondPercent = 0,
  label,
  description,
  skeleton,
  className,
  small,
  ...others
}: ProgressRadialProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const [firstProgressCurrentValue, setFirstProgressCurrentValue] = useState(0)
  const [secondProgressCurrentValue, setSecondProgressCurrentValue] = useState(0)

  const classes = hashClass(styled, clsx('progress-radial', skeleton && is('loading'), small && is('small'), className))
  const classesContent = hashClass(styled, clsx('progress-radial-content'))

  const progressRadialRef = useRef<HTMLDivElement>(null)

  // Function to update the background style based on the current progress
  const updateBackgroundStyle = (firstValue: number, secondValue: number) => {
    const progressRadial = progressRadialRef.current
    if (!progressRadial) {
      return
    }

    const firstProgressDegree = (360 * firstValue) / 100
    const secondProgressDegree = (360 * secondValue) / 100

    // Ensure the second progress starts where the first ends
    const secondProgressStartDegree = firstProgressDegree

    let styleBackground
    styleBackground = `radial-gradient(circle at center, white 58%, transparent 58.1%),`
    styleBackground += `conic-gradient(#0C7B91 0 ${firstProgressDegree}deg, #25465f ${secondProgressStartDegree}deg ${secondProgressStartDegree + secondProgressDegree}deg, gainsboro ${secondProgressStartDegree + secondProgressDegree}deg 360deg)`

    progressRadial.style.background = styleBackground
  }

  useEffect(() => {
    let animationFrameId: any

    // Reset the current values whenever the provided percent or secondPercent change
    setFirstProgressCurrentValue(0)
    setSecondProgressCurrentValue(0)
    updateBackgroundStyle(percent, secondPercent) // if percent or secondPercent are 0, update immediately

    const frame = () => {
      setFirstProgressCurrentValue((value) => {
        return value < percent ? value + 1 : value
      })
      setSecondProgressCurrentValue((value) => {
        return value < secondPercent ? value + 1 : value
      })
      animationFrameId = requestAnimationFrame(frame)
    }

    animationFrameId = requestAnimationFrame(frame)

    // Cleanup
    return () => cancelAnimationFrame(animationFrameId)
  }, [percent, secondPercent])

  useEffect(() => {
    updateBackgroundStyle(firstProgressCurrentValue, secondProgressCurrentValue)
  }, [firstProgressCurrentValue, secondProgressCurrentValue])

  return (
    <div {...others} className={classes} ref={progressRadialRef}>
      <div className={classesContent}>
        {label && <Title level={TitleLevels.TWO} marginless>{label}</Title>}
        {description && <Text level={TextLevels.ONE} marginless>{description}</Text>}
        {!label && !description && children}
      </div>
    </div>
  )
}

export default ProgressRadial
