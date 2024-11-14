import React from 'react'

import { ClickEvent } from '@/events/OnClickEvent'

interface IParams {
  disabled?: boolean
  active?: boolean
  onClick?: ClickEvent
}

export const useTabsItem = ({ disabled, active, onClick }: IParams) => {
  try {
    const [activeItem, setActiveItem] = React.useState<boolean>(active || false)

    const handleClick = React.useCallback((e: React.MouseEvent) => {
      if (!disabled) {
        const target = e.target as HTMLFormElement
        setActiveItem(active || false)
        target.active = active
        if (onClick) {
          onClick(e)
        }
      }
    }, [])

    React.useEffect(() => {
      setActiveItem(active || false)
    }, [active])

    return { activeItem, handleClick }
  } catch {
    return {
      activeItem: active,
      handleClick: undefined,
    }
  }
}
