import { ProgressRadialProps } from '@/components/progress/radial/ProgressRadialProps'
import { useProgressRadial } from '@/components/progress/radial/hooks/useProgressRadial'
import { Text, TextLevels } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/index'
import clsx from 'clsx'
import React from 'react'

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
  const { progressRadialRef } = useProgressRadial({ value, secondValue })
  const classes = hashClass(clsx('progress-radial', skeleton && is('loading'), small && is('small'), className))
  const classesContent = hashClass(clsx('progress-radial-content'))

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
