'use client'

import { createContext } from 'react'

export const StatesContext = createContext({
  inverted: false,
  active: false,
  flat: false,
})
