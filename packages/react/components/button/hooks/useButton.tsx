import { ClickEvent } from '@/events/OnClickEvent'
import React from 'react'

interface IParams {
  isDisabled?: boolean
  onClick?: ClickEvent
}

export const useButton = ({ isDisabled, onClick }: IParams) => {
  try {
    const _ = React.useState()

    const handleClick = (e: React.MouseEvent<HTMLInputElement | HTMLElement, MouseEvent>) => {
      !isDisabled && onClick?.(e)
      e.stopPropagation()
    }

    return { handleClick }
  } catch {
    return {}
  }
}
