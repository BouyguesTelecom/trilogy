import { ProgressProps } from '@/components/progress/ProgressProps'
import { Text } from '@/components/text'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getStatusClassName } from '@/objects/facets/Status'
import { is } from '@/services/index'
import clsx from 'clsx'
import React from 'react'

/**
 * Progress component
 * @param children {ReactNode} Use Children it only if stacked progress
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param small {boolean} Small progress
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS classes
 */
const Progress = ({
  className,
  id,
  value,
  max = 100,
  status,
  small,
  legendStart,
  legendCenter,
  legendEnd,
  ...others
}: ProgressProps) => {
  const classes = hashClass(
    clsx(
      'progress',
      status && is(getStatusClassName(status)),
      !status && is('primary'),
      small && is('small'),
      className,
    ),
  )

  return (
    <div className='progress-container'>
      <progress id={id} className={classes} value={value} max={max} {...others}>
        {value}
      </progress>
      {(legendStart || legendCenter || legendEnd) && (
        <div className='progress-legends'>
          {legendStart && (
            <div className='progress-legend-start'>
              <Text>{legendStart}</Text>
            </div>
          )}
          {legendCenter && (
            <div className='progress-legend-center'>
              <Text>{legendCenter}</Text>
            </div>
          )}
          {legendEnd && (
            <div className='progress-legend-end'>
              <Text>{legendEnd}</Text>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Progress
