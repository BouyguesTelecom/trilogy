import React from 'react'

export const FlexBoxContext = React.createContext({
  scrollable: false,
  width: 0,
  realGap: 16,
  childrenLength: 1,
})
