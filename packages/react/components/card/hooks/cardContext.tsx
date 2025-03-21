import React from 'react'

export const useCard = () => {
  try {
    return React.createContext({ horizontal: false })
  } catch {
    return { horizontal: false }
  }
}
