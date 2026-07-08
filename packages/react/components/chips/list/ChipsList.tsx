import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ChipsListProps, ChipsListRef } from './ChipsListProps'

/**
 * ChipsList Component - Container for Chips
 * @param id {string} Custom id attribute
 * @param children {React.ReactNode}
 * @param multiple {boolean} Selection Multiple With checked icon
 * @param scrollable {boolean} If multiple Chips make scrollable List
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param accessibilityLabelledBy {string} Accessibility label id for ChipsList
 */
const ChipsList = React.forwardRef<ChipsListRef, ChipsListProps>(
  ({ className, id, children, multiple, scrollable, accessibilityLabelledBy, testId, ...others }, ref) => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx('chips-list', multiple && is('multiple'), scrollable && is('scrollable'), className),
    )

    return (
      <div ref={ref} id={id} role='group' aria-labelledby={accessibilityLabelledBy} className={classes} data-testid={testId} {...others}>
        {children}
      </div>
    )
  },
)

ChipsList.displayName = ComponentName.ChipsList
export default ChipsList
