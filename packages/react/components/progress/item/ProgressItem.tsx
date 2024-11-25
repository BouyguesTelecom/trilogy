import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { ProgressItemProps } from '@/components/progress/item/ProgressItemProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getStatusClassName } from '@/objects/facets/Status'
import { is } from '@/services/classify'

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
const ProgressItem = React.forwardRef(
  (
    { className, percent, maxPercent = 100, minPercent = 0, status, accessibilityLabel, ...others }: ProgressItemProps,
    ref: React.LegacyRef<HTMLDivElement>,
  ) => {
    const classes = hashClass(
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
