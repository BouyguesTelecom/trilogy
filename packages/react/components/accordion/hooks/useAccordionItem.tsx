import React from 'react'
import { OnClickCallback } from '../item/AccordionItemProps'

interface IProps {
  disabled?: boolean
  onClick?: OnClickCallback
}

export const useAccordionBody = ({ disabled, onClick }: IProps) => {
  try {
    const _ = React.useState()

    const handleClick: React.MouseEventHandler<HTMLDetailsElement> = React.useCallback(
      (e) => {
        if (disabled) {
          e.preventDefault()
          e.stopPropagation()
        }
        if (onClick && !disabled) {
          onClick(e)
        }
      },
      [disabled],
    )

    const onKeyDown: React.KeyboardEventHandler<HTMLDetailsElement> = React.useCallback(
      (e) => {
        if (disabled) {
          e.preventDefault()
          e.stopPropagation()
        }
      },
      [disabled],
    )

    return { handleClick, onKeyDown }
  } catch {
    return {}
  }
}
