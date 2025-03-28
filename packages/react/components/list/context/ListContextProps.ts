import React from 'react'

export interface ListContextProps {
  divider: boolean
  ordered: boolean
  chilIndexes: string[]
  setChildIndexes: React.Dispatch<React.SetStateAction<string[]>>
}
