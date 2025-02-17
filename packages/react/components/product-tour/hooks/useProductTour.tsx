import { isServer } from '@/helpers/isServer'
import React from 'react'

interface IProps {
  active?: boolean
}

export const useProductTour = ({ active }: IProps) => {
  if (isServer) {
    return {
      display: active || false,
    }
  }

  const [display, setDisplay] = React.useState<boolean>(active || false)
  const handleClick = React.useCallback(() => setDisplay((prev) => !prev), [])

  React.useEffect(() => {
    setDisplay(active || false)
  }, [active])

  return {
    display,
    handleClick,
  }
}
