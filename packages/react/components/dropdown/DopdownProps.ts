import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'

export interface DropdownProps extends CommonProps {
  children?: React.ReactNode
  trigger?: React.ReactNode
}

export type DropdownRef = HTMLDivElement
export type DropdownNativeRef = View
