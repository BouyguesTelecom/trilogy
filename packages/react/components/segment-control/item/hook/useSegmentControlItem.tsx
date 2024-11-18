import React from 'react'

import { ClickEvent } from '@/events/OnClickEvent'

interface IParams {
  active?: boolean
  onClick?: ClickEvent
}

export const useSegmentControlItem = ({ active, onClick }: IParams) => {
  try {
    const [activeItem, setActiveItem] = React.useState<boolean>(active || false)

    const handleClick = React.useCallback(
      (e: React.MouseEvent) => {
        const target = e.target as HTMLFormElement
        setActiveItem(active || false)
        target.active = active
        if (onClick) {
          onClick(e)
        }
      },
      [onClick, active],
    )

    React.useEffect(() => {
      setActiveItem(active || false)
    }, [active])

    return { activeItem, handleClick }
  } catch {
    return { activeItem: active }
  }
}
