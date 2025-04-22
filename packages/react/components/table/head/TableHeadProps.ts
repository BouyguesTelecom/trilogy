import { View } from 'react-native'
import { TrilogyColor, TrilogyColorValues } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface TableHeadProps extends CommonProps {
  children: React.ReactNode
  color?: TrilogyColor | TrilogyColorValues
  backgroundColor?: TrilogyColor | TrilogyColorValues
}

export type TableHeadRef = HTMLTableSectionElement
export type TableHeadNativeRef = View
