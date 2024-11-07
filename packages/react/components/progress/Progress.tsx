import * as React from 'react'
import { ProgressProps } from './ProgressProps'
import { is } from '@/services/index'
import { getStatusClassName } from '@/objects'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'

/**
 * Progress component
 * @param children {ReactNode} Use Children it only if stacked progress
 * @param percent {number} Progress percent
 * @param maxPercent {number} Default max percent is 100
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param small {boolean} Small progress
 * @param stacked {boolean} Stacked progress
 * @param uniqueLegend {string} Unique legend
 * @param firstExtremLegend {string} First extremity legend, only with secondExtremLegend property
 * @param secondExtremLegend {string} Second extremity legend, only with firstExtremLegend property
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS classes
 */
const Progress = React.forwardRef((props: ProgressProps) => {
  const { children, className, id, value, max = 100, status, small, ...others } = props
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

  return (
    <>
      <progress id={id} className={classes} value={value} max={max} {...others}>
        {value}
      </progress>
      {children}
    </>
  )
})

export default Progress
