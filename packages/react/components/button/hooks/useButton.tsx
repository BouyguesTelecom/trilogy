import { ClickEvent } from '@/events/OnClickEvent'
import { isServer } from '@/helpers/isServer'
import React from 'react'

interface IParams {
  isDisabled?: boolean
  onClick?: ClickEvent
}

export const useButton = ({ isDisabled, onClick }: IParams) => {
  if (isServer) return {}

  const handleClick = (e: React.MouseEvent<HTMLInputElement | HTMLElement, MouseEvent>) => {
    !isDisabled && onClick?.(e)
    e.stopPropagation()
  }

  return { handleClick }
}
