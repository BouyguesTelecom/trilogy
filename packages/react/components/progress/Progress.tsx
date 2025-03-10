import { Text } from '@/components/text'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getStatusClassName } from '@/objects/facets/Status'
import { is } from '@/services/index'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { ProgressProps, ProgressRef } from './ProgressProps'

/**
 * Progress component
 * @param children {ReactNode} Use Children it only if stacked progress
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param small {boolean} Small progress
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS classes
 */
const Progress = React.forwardRef<ProgressRef, ProgressProps>(
  ({ className, id, value, max = 100, status, small, legendStart, legendCenter, legendEnd, ...others }, ref) => {
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
      <div ref={ref} className='progress-container'>
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
  },
)

Progress.displayName = ComponentName.Progress
export default Progress
