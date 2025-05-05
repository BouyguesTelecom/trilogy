import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { SegmentControlItemProps, SegmentControlItemRef } from './SegmentControlItemProps'

/**
 * SegmentControl Item Component
 * @param active {boolean} active segmentedControl item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param disabled {boolean} disable onClick on item
 * @param inverted {boolean} invert color of active item
 * - -------------- WEB PROPERTIES ---------------
 * @param className {string} Additional CSS Classes
 */
const SegmentControlItem = React.forwardRef<SegmentControlItemRef, SegmentControlItemProps>(
  ({ active, onClick, disabled, className, id, children, ...others }, ref): JSX.Element => {
    const [activeItem, setActiveItem] = useState<boolean>(active || false)
    const { styled } = useTrilogyContext()

    useEffect(() => {
      setActiveItem(active || false)
    }, [active])

    return (
      <button
        type='button'
        ref={ref}
        id={id}
        disabled={disabled}
        className={hashClass(styled, clsx('segmented-control-item', className, { 'is-active': activeItem }))}
        onClick={(e: React.MouseEvent) => {
          const target = e.target as HTMLFormElement
          setActiveItem(active || false)
          target.active = active
          if (onClick) {
            onClick(e)
          }
        }}
        {...others}
      >
        {children}
      </button>
    )
  },
)

SegmentControlItem.displayName = ComponentName.SegmentControlItem
export default SegmentControlItem
