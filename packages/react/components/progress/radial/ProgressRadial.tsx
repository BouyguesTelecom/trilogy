import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { useProgressRadial } from '@/components/progress/radial/hook/useProgressRadial'
import { ProgressRadialProps } from '@/components/progress/radial/ProgressRadialProps'
import { Text, TextLevels } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Progress Radial component
 * @param percent {number} Progress percent
 * @param label {string} Custom label
 * @param description {string} Custom description
 * @param children {React.ReactNode}
 * @param secondPercent {number} Second progress percent
 * @param skeleton {boolean} Skeleton Progress Radial
 * - --------------- NATIVE PROPERTIES ----------------------------------
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR|TERTIARY)
 * @param secondStatus {StatusState} Second Progress status variant (SUCCESS|INFO|WARNING|ERROR|TERTIARY)
 * @param full {boolean} Full progressRadial
 * @param disk {boolean} Disk ProgressRadial
 * @param align {Alignable} Progress Radial Alignement
 * - --------------- WEB PROPERTIES -------------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param small {boolean} Display small progress radial
 */
const ProgressRadial = React.forwardRef(
  (
    {
      children,
      percent = 0,
      secondPercent = 0,
      label,
      description,
      skeleton,
      className,
      small,
      ...others
    }: ProgressRadialProps,
    ref: React.Ref<HTMLDivElement>,
  ): JSX.Element => {
    const { progressRadialRef, styleSSR } = useProgressRadial({ percent, secondPercent })

    const classes = hashClass(clsx('progress-radial', skeleton && is('loading'), small && is('small'), className))
    const classesContent = hashClass(clsx('progress-radial-content'))

    return (
      <div className={classes} ref={progressRadialRef} style={styleSSR} {...others}>
        <div className={classesContent} ref={ref}>
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
