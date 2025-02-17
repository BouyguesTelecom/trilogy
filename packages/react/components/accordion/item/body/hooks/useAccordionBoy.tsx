import { isServer } from '@/helpers/isServer'
import React from 'react'

export const useAccordionBody = () => {
  if (isServer) return {}

  const onClick = React.useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  }, [])

  return { onClick }
}
