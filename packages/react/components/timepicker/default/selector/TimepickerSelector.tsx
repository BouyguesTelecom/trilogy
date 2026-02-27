import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import React, { useEffect, useRef } from 'react'
import TimepickerSelectorItem from './item/TimepickerSelectorItem'

interface SelectItem {
  label: string
  value: string | number
}

interface SelectProps {
  items: SelectItem[]
  value: string | number
  onValueChange: (value: string | number) => void
  visibleItems?: number
}

export const TimepickerSelector = ({ items, value, onValueChange, visibleItems = 5 }: SelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { styled } = useTrilogyContext()

  useEffect(() => {
    const selectedIndex = items.findIndex((item) => item.value === value)
    if (selectedIndex !== -1 && containerRef.current) {
      const itemHeight = 36
      const scrollTop = selectedIndex * itemHeight - ((visibleItems - 1) * itemHeight) / 2
      containerRef.current.scrollTop = Math.max(0, scrollTop)
    }
  }, [value, items, visibleItems])

  return (
    <div
      ref={containerRef}
      className={hashClass(styled, clsx('timepicker-selector'))}
      style={{
        height: `${visibleItems * 48}px`,
      }}
    >
      {items.map((item, index) => (
        <TimepickerSelectorItem
          key={`${item.value}-${index}`}
          item={item}
          isSelected={item.value === value}
          onClick={() => onValueChange(item.value)}
        />
      ))}
    </div>
  )
}
