import { isServer } from '@/helpers/isServer'
import React from 'react'

export const useAutocompleteItem = () => {
  if (isServer) {
    return {
      isActive: false,
    }
  }
  const [isActive, setIsActive] = React.useState(false)

  const onMouseOver = React.useCallback(() => {
    setIsActive(true)
  }, [])

  const onMouseOut = React.useCallback(() => {
    setIsActive(false)
  }, [])

  return { isActive, onMouseOut, onMouseOver }
}
