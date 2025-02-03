import React from 'react'

import { ClickEvent } from '@/events/OnClickEvent'

interface IParams {
  activeIndex?: number
  onClick?: ClickEvent
}
export const useSegmentControl = ({ activeIndex, onClick }: IParams) => {
  try {
    const [activateIndex, setActivateIndex] = React.useState<number>(activeIndex || 0)

    const toggleActive = React.useCallback(
      (e: React.MouseEvent, index: number) => {
        setActivateIndex(index)
        if (onClick) onClick(e)
      },
      [onClick],
    )

    const handleClick = React.useCallback(
      (event: React.MouseEvent, index: number, child: React.ReactElement) => {
        toggleActive(event, index)
        if (child) {
          if (child.props.onClick) {
            child.props.onClick(event)
          }
        }
      },
      [toggleActive],
    )

    React.useEffect(() => {
      setActivateIndex(activateIndex)
    }, [activateIndex])

    return { handleClick, activateIndex }
  } catch {
    return {
      activateIndex: activeIndex,
    }
  }
}
