import { OnClickCallback } from '@/components/accordion/item/AccordionItemProps'
import React from 'react'

interface IParams {
  onClick?: OnClickCallback
}

export const useAccordionItem = ({ onClick }: IParams) => {
  try {
    const handleClick = (e: React.MouseEvent<HTMLDetailsElement>) => {
      if (onClick) onClick(e)
    }

    return { handleClick: onClick ? handleClick : undefined }
  } catch {
    return {}
  }
}
