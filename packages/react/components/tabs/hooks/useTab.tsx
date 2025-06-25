import { TabsContext } from '@/components/tabs/context'
import { ClickEvent } from '@/events/OnClickEvent'
import React from 'react'

interface IParams {
  index: number
  active?: boolean
  disabled?: boolean
  onClick?: ClickEvent
  href?: string
  to?: string
}

export const useTab = ({ index, disabled, onClick, active, href, to }: IParams) => {
  try {
    const { activeIndex, setActiveIndex, small } = React.useContext(TabsContext)
    const isActive = React.useMemo(() => activeIndex === index, [activeIndex, index])

    const handleClick = React.useCallback(
      (e: React.MouseEvent) => {
        if (!disabled) {
          if (!href && !to) setActiveIndex(index)
          if (onClick) onClick(e)
        }
      },
      [disabled, onClick, index, setActiveIndex],
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
