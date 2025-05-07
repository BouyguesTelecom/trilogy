import { TabsContext } from '@/components/tabs/context'
import { ClickEvent } from '@/events/OnClickEvent'
import React from 'react'

interface IParams {
  index: number
  active?: boolean
  routerLink?: React.ElementType
  disabled?: boolean
  onClick?: ClickEvent
}

export const useTab = ({ index, disabled, routerLink, onClick, active }: IParams) => {
  try {
    const { activeIndex, setActiveIndex, small } = React.useContext(TabsContext)
    const isActive = React.useMemo(() => activeIndex === index, [activeIndex, index])

    const handleClick = React.useCallback(
      (e: React.MouseEvent) => {
        if (!disabled) {
          if (!routerLink) setActiveIndex(index)
          if (onClick) onClick(e)
        }
      },
      [disabled, onClick, index, setActiveIndex, routerLink],
    )

    React.useEffect(() => {
      if (active) setActiveIndex(index)
    }, [active, setActiveIndex, index])

    return { handleClick, isActive, small }
  } catch {
    return {
      isActive: 0 === index,
      small: false,
    }
  }
}
