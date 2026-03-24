import { Clickable, Dev, Referenceable, ReferenceableNative, TrilogyColor, TrilogyColorValues } from '../../../objects'
import { TouchableOpacity, View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'

interface TableTrPropsWeb extends Clickable, Dev {
  children: React.ReactNode
  expandable?: boolean
  expanded?: boolean | React.ReactNode | string
  className?: string
  expansion?: boolean
  color?: TrilogyColor | TrilogyColorValues
}

export type TableTrPropsNative = TableTrPropsWeb & ReferenceableNative<View>

export type TableTrProps = TableTrPropsWeb & Referenceable<HTMLTableRowElement> & CommonProps

export type TableTrRef = HTMLTableRowElement
export type TableTrNativeRef = View
