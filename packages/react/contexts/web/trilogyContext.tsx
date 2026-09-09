import * as React from 'react'
import type { ITrilogyContext } from './interfaces'

const TrilogyContext = React.createContext<ITrilogyContext>({
  mangled: false,
  setMangled: () => undefined,
})

const useTrilogyContext = () => {
  const context = React.useContext(TrilogyContext)
  if (context === undefined) {
    throw new Error('useTrilogyContext must be used within a TrilogyProvider')
  }
  return context
}

export { TrilogyContext, useTrilogyContext }
