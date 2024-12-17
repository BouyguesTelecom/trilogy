import { OnClickCallback } from '@/components/accordion/item/AccordionItemProps'
import React from 'react'

interface IParams {
  onClick?: OnClickCallback
}

export const useAccordionItem = ({ onClick }: IParams) => {
  try {
    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLDetailsElement>) => {
        if (onClick) onClick(e)
      },
      [onClick],
    )

    return { handleClick }
  } catch {
    return {}
  }
}
