import React from 'react'
import { ListContextProps } from './ListContextProps'

export const ListContext = React.createContext<ListContextProps>({
  divider: false,
  ordered: false,
  chilIndexes: [],
  setChildIndexes: () => [''],
})
