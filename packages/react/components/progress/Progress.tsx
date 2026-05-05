import { Text } from '@/components/text'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getStatusClassName } from '@/objects'
import { is } from '@/services/index'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { ProgressProps, ProgressRef } from './ProgressProps'

/**
 * Progress Component
 * @param children {ReactNode} Children for stacked progress
 * @param value {number} Progress value (0-100)
 * @param max {number} Maximum value (default: 100)
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param small {boolean} Small progress bar
 * @param legendStart {string} Legend at the start of the progress bar
 * @param legendCenter {string} Legend at the center of the progress bar
 * @param legendEnd {string} Legend at the end of the progress bar
 * @param stacked {boolean} Stacked progress bar (use children)
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
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
      testId,
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
        <div className={stackedClasses} data-testid={testId} {...others}>
          {children}
        </div>
      )
    }

    return (
      <div ref={ref} className='progress-container'>
        <progress id={id} className={classes} value={value} max={max} data-testid={testId} {...others}>
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
