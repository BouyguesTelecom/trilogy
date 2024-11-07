import * as React from 'react'
import { ProgressLegendProps } from './ProgressLegendProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { Text } from '@/components/text'

/**
 * Progress Item component - Only if stacked
 * @param percent {number} Progress percent
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param children {React.ReactNode}
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS classes
 * @param accessibilityLabel {string} Accessibility label
 * @param minPercent {number} Default min percent is 100
 * @param maxPercent {number} Default max percent is 100
 */
const ProgressLegend = React.forwardRef((props: ProgressLegendProps) => {
  const { start, center, end, className, id, ...others } = props

  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('progress-legends', className))

  return (
    <div id={id} className={classes} {...others}>
      {start && (
        <div className='progress-legend-start'>
          <Text>{start}</Text>
        </div>
      )}
      {center && (
        <div className='progress-legend-center'>
          <Text>{center}</Text>
        </div>
      )}
      {end && (
        <div className='progress-legend-end'>
          <Text>{end}</Text>
        </div>
      )}
    </div>
  )
})
export default ProgressLegend
