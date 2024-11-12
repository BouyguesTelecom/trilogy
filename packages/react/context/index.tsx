'use client'

import * as React from 'react'

interface ITrilogyContext {
  styled: boolean
  setStyled: (e: boolean) => void
  hash?: string
  setHash?: React.Dispatch<React.SetStateAction<string>>
  useClient?: boolean
}

const TrilogyContext = React.createContext<ITrilogyContext>({
  styled: false,
  setStyled: () => undefined,
})

const useTrilogyContext = () => {
  const context = React.useContext(TrilogyContext)
  if (context === undefined) {
    throw new Error('useTrilogyContext must be used within a TrilogyProvider')
  }
  return context
}

export { TrilogyContext, useTrilogyContext }
