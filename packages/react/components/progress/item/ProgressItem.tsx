import { ComponentName } from '@/components/enumsComponentsName'
import clsx from 'clsx'
import React from 'react'
import { useTrilogyContext } from '../../../context'
import { hashClass } from '../../../helpers'
import { getStatusClassName } from '../../../objects'
import { is } from '../../../services/index'
import { ProgressItemProps, ProgressItemWebRef } from './ProgressItemProps'

/**
 * Progress Item component - Only if stacked
 * @param percent {number} Progress percent
 * @param minPercent {number} Default min percent is 100
 * @param maxPercent {number} Default max percent is 100
 * @param status {StatusProps} Progress alert variant (SUCCESS|INFO|WARNING|ERROR)
 * @param children {React.ReactNode}
 * @param accessibilityLabel {string} Accessibility label
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 */
const ProgressItem = React.forwardRef<ProgressItemWebRef, ProgressItemProps>(
  (
    { className, percent, maxPercent = 100, minPercent = 0, status, accessibilityLabel, ...others },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx('progress-bar', status && is(getStatusClassName(status)), !status && is('primary'), className),
    )

    return (
      <div
        ref={ref}
        {...(percent && { style: { width: `${percent}%` } })}
        className={classes}
        role='progressbar'
        aria-valuenow={percent}
        aria-valuemin={minPercent}
        aria-valuemax={maxPercent}
        aria-label={accessibilityLabel}
        {...others}
      />
    )
  },
)

ProgressItem.displayName = ComponentName.ProgressItem
export default ProgressItem
