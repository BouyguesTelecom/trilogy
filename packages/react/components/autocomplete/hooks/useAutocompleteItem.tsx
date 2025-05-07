import React from 'react'

export const useAutocompleteItem = () => {
  try {
    const [isActive, setIsActive] = React.useState(false)

    const onMouseOver = React.useCallback(() => {
      setIsActive(true)
    }, [])

    const onMouseOut = React.useCallback(() => {
      setIsActive(false)
    }, [])

    return { isActive, onMouseOut, onMouseOver }
  } catch {
    return {
      isActive: false,
    }
  }
}
