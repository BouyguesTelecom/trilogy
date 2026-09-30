import { Dispatch, SetStateAction } from 'react'
export interface ListContextProps {
  divider: boolean
  ordered: boolean
  chilIndexes: string[]
  setChildIndexes: Dispatch<SetStateAction<string[]>>
}
