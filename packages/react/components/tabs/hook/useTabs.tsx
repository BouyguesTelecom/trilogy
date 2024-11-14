import React from 'react'

import { ClickEvent } from '@/events/OnClickEvent'

interface IParams {
  currentIndex?: number
  onClick?: ClickEvent
  disabled?: boolean
}

export const useTabs = ({ currentIndex, onClick, disabled }: IParams) => {
  try {
    const [activateIndex, setActivateIndex] = React.useState<number>(currentIndex || 0)

    const isActive = React.useCallback(
      (index: number, childPropsActive: React.ReactNode) => {
        if (typeof childPropsActive !== 'undefined' && !activateIndex) return childPropsActive
        if (index === activateIndex) return true
      },
      [activateIndex],
    )

    const toggleActive = React.useCallback(
      (e: React.MouseEvent, index: number) => {
        if (disabled) return false
        setActivateIndex(index)
        if (onClick) onClick(e)
      },
      [disabled],
    )

    const handleClick = React.useCallback((e: React.MouseEvent, index: number, child: React.ReactElement) => {
      toggleActive(e, index)
      if (child?.props?.onClick) child.props.onClick(e)
    }, [])

    React.useEffect(() => {
      setActivateIndex(activateIndex)
    }, [currentIndex])

    return {
      isActive,
      handleClick,
    }
  } catch {
    return {
      isActive: (index: number, childPropsActive: React.ReactNode) => {
        if (typeof childPropsActive !== 'undefined' && !currentIndex) return childPropsActive
        if (index === currentIndex) return true
      },
      handleClick: undefined,
    }
  }
}
