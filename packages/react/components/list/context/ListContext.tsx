import React from 'react'
import { ListContextProps } from '@/components/list/context/ListContextProps'

export const ListContext = React.createContext<ListContextProps>({
  divider: false,
  ordered: false,
  chilIndexes: [],
  setChildIndexes: () => [''],
})
