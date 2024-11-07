import { Clickable, Referenceable, ReferenceableNative, TrilogyColor, TrilogyColorValues } from '@/objects'
import { TouchableOpacity } from 'react-native'
import { CommonProps } from '@/objects/facets/CommonProps'

interface TableTrPropsWeb extends Clickable {
  children: React.ReactNode
  expandable?: boolean
  expanded?: boolean | React.ReactNode | string
  className?: string
  expansion?: boolean
  color?: TrilogyColor | TrilogyColorValues
}

export type TableTrPropsNative = TableTrPropsWeb & ReferenceableNative<TouchableOpacity>

export type TableTrProps = TableTrPropsWeb & Referenceable<HTMLTableRowElement> & CommonProps
