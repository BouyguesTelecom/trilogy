import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import React from 'react'
import { SegmentControlItemProps, SegmentControlItemRef } from './SegmentControlItemProps'
import { useSegmentControlItem } from './hooks/useSegmentControlItem'

/**
 * SegmentControl Item Component
 * @param active {boolean} active segmentedControl item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param disabled {boolean} disable onClick on item
 * @param inverted {boolean} invert color of active item
 * - -------------- WEB PROPERTIES ---------------
 * @param className {string} Additionnal CSS Classes
 */
const SegmentControlItem = React.forwardRef<SegmentControlItemRef, SegmentControlItemProps>(
  ({ active, onClick, disabled, className, id, children }, ref): JSX.Element => {
    const { activeItem, handleClick } = useSegmentControlItem({ active, onClick })

    return (
      <button
        type='button'
        ref={ref}
        id={id}
        disabled={disabled}
        className={hashClass(clsx('segmented-control-item', className, { 'is-active': activeItem }))}
        onClick={handleClick}
      >
        {children}
      </button>
    )
  },
)

SegmentControlItem.displayName = ComponentName.SegmentControlItem
export default SegmentControlItem
