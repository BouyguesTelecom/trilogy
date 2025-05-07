import { ComponentName } from '@/components/enumsComponentsName'
import { useProgressRadial } from '@/components/progress/hooks/useProgressRadial'
import { ProgressRadialProps, ProgressRadialRef } from '@/components/progress/radial/ProgressRadialProps'
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
const ProgressRadial = React.forwardRef<ProgressRadialRef, ProgressRadialProps>(
  (
    { children, value = 0, secondValue = 0, label, description, skeleton, className, id, small, ...others },
    ref,
  ): JSX.Element => {
    const { progressRadialRef } = useProgressRadial({ value, secondValue })
    const classes = hashClass(clsx('progress-radial', skeleton && is('loading'), small && is('small'), className))
    const classesContent = hashClass(clsx('progress-radial-content'))

    return (
      <div id={id} {...others} className={classes} ref={progressRadialRef}>
        <div ref={ref} className={classesContent}>
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
  },
)

ProgressRadial.displayName = ComponentName.ProgressRadial
export default ProgressRadial
