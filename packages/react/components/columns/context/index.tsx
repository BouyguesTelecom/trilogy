import React from 'react'

export interface ColumnsContextType {
  scrollable: boolean
  width: number
  realGap: number
  childrensLength: number
}

const defaultContextValue: ColumnsContextType = {
  scrollable: false,
  width: 0,
  realGap: 16,
  childrensLength: 1,
}

export const ColumnsContext = React.createContext<ColumnsContextType>(defaultContextValue)
