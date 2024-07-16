import React, { useState, useEffect } from 'react'
import { SegmentControlItemProps } from './SegmentControlItemProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'

/**
 * SegmentControl Item Component
 * @param active {boolean} active segmentedControl item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param disabled {boolean} disable onClick on item
 * @param inverted {boolean} invert color of active item
 */
const SegmentControlItem = ({
  active,
  onClick,
  disabled,
  className,
  children,
}: SegmentControlItemProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState<boolean>(active || false)
  const { styled } = useTrilogyContext()

  useEffect(() => {
    setActiveItem(active || false)
  }, [active])

  return (
    <button
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
    >
      {children}
    </button>
  )
}

export default SegmentControlItem
