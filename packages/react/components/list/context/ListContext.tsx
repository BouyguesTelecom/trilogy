import { createContext } from 'react'
import { ListContextProps } from './ListContextProps'

export const ListContext = createContext<ListContextProps>({
  divider: false,
  ordered: false,
  chilIndexes: [],
  setChildIndexes: () => [''],
})
