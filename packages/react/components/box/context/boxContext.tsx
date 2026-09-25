import React from 'react'

interface BoxContextValue {
  fullHeight: boolean
}

export const BoxContext = React.createContext<BoxContextValue>({
  fullHeight: false,
})
