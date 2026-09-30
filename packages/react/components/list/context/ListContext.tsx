import { ListContextProps } from '@/components/list/context/ListContextProps'
import { createContext } from 'react'

export const ListContext = createContext<ListContextProps>({
  divider: false,
  ordered: false,
  chilIndexes: [],
  setChildIndexes: () => [''],
})
