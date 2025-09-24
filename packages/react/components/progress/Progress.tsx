import { Text } from '@/components/text'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import { getStatusClassName } from '@/objects/index'
import { is } from '@/services/index'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { ProgressProps, ProgressRef } from './ProgressProps'

/**
 * Progress component
 * @param children {ReactNode} Use Children it only if stacked progress
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param small {boolean} Small progress
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 */
const Progress = React.forwardRef<ProgressRef, ProgressProps>(
  (
    {
      children,
      className,
      id,
      value,
      max = 100,
      status,
      small,
      legendStart,
      legendCenter,
      legendEnd,
      stacked,
      ...others
    },
    ref,
  ) => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx(
        'progress',
        status && is(getStatusClassName(status)),
        !status && is('primary'),
        small && is('small'),
        className,
      ),
    )

    const stackedClasses = hashClass(styled, clsx('progress', stacked && is('stacked'), className))

    if (children && stacked) {
      return (
        <div className={stackedClasses} {...others}>
          {children}
        </div>
      )
    }

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
