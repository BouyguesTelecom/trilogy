import { View } from 'react-native'
import { TrilogyColor, TrilogyColorValues } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface TableBodyProps extends CommonProps{
  children: React.ReactNode
  color?: TrilogyColor | TrilogyColorValues
  backgroundColor?: TrilogyColor | TrilogyColorValues
}

export type TableBodyRef = HTMLTableSectionElement
export type TableBodyNativeRef = View
