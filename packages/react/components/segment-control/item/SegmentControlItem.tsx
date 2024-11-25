import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { useSegmentControlItem } from '@/components/segment-control/item/hook/useSegmentControlItem'
import { SegmentControlItemProps } from '@/components/segment-control/item/SegmentControlItemProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

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
const SegmentControlItem = React.forwardRef(
  (
    { active, onClick, disabled, className, children }: SegmentControlItemProps,
    ref: React.Ref<HTMLButtonElement>,
  ): JSX.Element => {
    const { activeItem, handleClick } = useSegmentControlItem({ active, onClick })

    return (
      <button
        ref={ref}
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
