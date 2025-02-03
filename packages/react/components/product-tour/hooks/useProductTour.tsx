import React from 'react'

interface IProps {
  active?: boolean
}

export const useProductTour = ({ active }: IProps) => {
  try {
    const [display, setDisplay] = React.useState<boolean>(active || false)
    const handleClick = React.useCallback(() => setDisplay((prev) => !prev), [])

    React.useEffect(() => {
      setDisplay(active || false)
    }, [active])

    return {
      display,
      handleClick,
    }
  } catch {
    return {
      display: active || false,
    }
  }
}
