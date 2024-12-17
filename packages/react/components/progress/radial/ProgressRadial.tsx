import { getColorStyle } from '@/objects/facets/Color'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { hashClass } from '../../../helpers'
import { is } from '../../../services/index'
import { Text, TextLevels } from '../../text'
import { Title, TitleLevels } from '../../title'
import { ProgressRadialProps } from './ProgressRadialProps'

/**
 * Progress Radial component
 * @param percent {number} Progress percent
 * @param label {string} Custom label
 * @param description {string} Custom description
 * @param children {React.ReactNode}
 * @param skeleton {boolean} Skeleton Progress Radial
 * - --------------- NATIVE PROPERTIES ----------------------------------
 * - --------------- WEB PROPERTIES -------------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param small {boolean} Display small progress radial
 */
const ProgressRadial = ({
  children,
  value = 0,
  secondValue = 0,
  label,
  description,
  skeleton,
  className,
  id,
  small,
  ...others
}: ProgressRadialProps): JSX.Element => {
  const [firstProgressCurrentValue, setFirstProgressCurrentValue] = useState(0)
  const [secondProgressCurrentValue, setSecondProgressCurrentValue] = useState(0)

  const classes = hashClass(clsx('progress-radial', skeleton && is('loading'), small && is('small'), className))
  const classesContent = hashClass(clsx('progress-radial-content'))

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
    styleBackground += `conic-gradient(#0C7B91 0 ${firstProgressDegree}deg, ${getColorStyle(
      'MAIN',
    )} ${secondProgressStartDegree}deg ${secondProgressStartDegree + secondProgressDegree}deg, ${getColorStyle(
      'MAIN_FADE',
    )} ${secondProgressStartDegree + secondProgressDegree}deg 360deg)`
    progressRadial.style.background = styleBackground
  }

  useEffect(() => {
    let animationFrameId: any

    // Reset the current values whenever the provided percent or secondPercent change
    setFirstProgressCurrentValue(0)
    setSecondProgressCurrentValue(0)
    updateBackgroundStyle(value, secondValue) // if percent or secondPercent are 0, update immediately

    const frame = () => {
      setFirstProgressCurrentValue((currentValue) => {
        return currentValue < value ? currentValue + 1 : currentValue
      })
      setSecondProgressCurrentValue((currentValue) => {
        return currentValue < secondValue ? currentValue + 1 : currentValue
      })
      animationFrameId = requestAnimationFrame(frame)
    }

    animationFrameId = requestAnimationFrame(frame)

    // Cleanup
    return () => cancelAnimationFrame(animationFrameId)
  }, [value, secondValue])

  useEffect(() => {
    updateBackgroundStyle(firstProgressCurrentValue, secondProgressCurrentValue)
  }, [firstProgressCurrentValue, secondProgressCurrentValue])

  return (
    <div id={id} {...others} className={classes} ref={progressRadialRef}>
      <div className={classesContent}>
        {label && (
          <Title level={TitleLevels.TWO} marginless>
            {label}
          </Title>
        )}
        {description && (
          <Text level={TextLevels.ONE} marginless>
            {description}
          </Text>
        )}
        {!label && !description && children}
      </div>
    </div>
  )
}

export default ProgressRadial
