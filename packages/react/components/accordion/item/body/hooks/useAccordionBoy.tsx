import React from 'react'

export const useAccordionBody = () => {
  try {
    const _ = React.useState()

    const onClick = React.useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation()
    }, [])

    return { onClick }
  } catch {
    return {}
  }
}
