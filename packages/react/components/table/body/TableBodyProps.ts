import { View } from 'react-native'
import { Dev, TrilogyColor, TrilogyColorValues } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface TableBodyProps extends CommonProps, Dev {
  children: React.ReactNode
  color?: TrilogyColor | TrilogyColorValues
  backgroundColor?: TrilogyColor | TrilogyColorValues
}

export type TableBodyRef = HTMLTableSectionElement
export type TableBodyNativeRef = View
