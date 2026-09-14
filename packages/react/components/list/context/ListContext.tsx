import { createContext } from 'react'
import { ListContextProps } from '@/components/list/context/ListContextProps'

export const ListContext = createContext<ListContextProps>({
  divider: false,
  ordered: false,
  chilIndexes: [],
  setChildIndexes: () => [''],
})
