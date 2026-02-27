import { Text } from '@/components/text'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import React from 'react'

interface SelectItem {
  label: string
  value: string | number
}

interface WheelItemProps {
  item: SelectItem
  isSelected: boolean
  onClick: () => void
}

const TimepickerSelectorItem = ({ item, isSelected, onClick }: WheelItemProps) => {
  const { styled } = useTrilogyContext()

  return (
    <div onClick={onClick} className={hashClass(styled, clsx('timepicker-selector-item', isSelected && is('active')))}>
      <Text>{item.label}</Text>
    </div>
  )
}

export default TimepickerSelectorItem
