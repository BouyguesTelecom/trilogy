import { createContext } from 'react'
export const FlexBoxContext = createContext({
  scrollable: false,
  width: 0,
  realGap: 16,
  childrenLength: 1,
})
