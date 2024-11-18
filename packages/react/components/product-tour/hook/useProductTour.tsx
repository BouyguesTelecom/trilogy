import React, { useCallback } from 'react'

interface IParams {
  active?: boolean
}

export const useProductTour = ({ active }: IParams) => {
  try {
    const [display, setDisplay] = React.useState<boolean>(active || false)

    const onClick = useCallback(() => setDisplay(!display), [])

    React.useEffect(() => {
      setDisplay(active || false)
    }, [active])

    return { display, onClick }
  } catch {
    return {
      display: active || false,
    }
  }
}
