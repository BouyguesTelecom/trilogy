import { TouchableOpacity } from 'react-native'

import { Clickable } from '@/objects/facets/Clickable'
import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { Referenceable, ReferenceableNative } from '@/objects/facets/Referenceable'

interface TableTrPropsWeb extends Clickable {
  children: React.ReactNode
  expandable?: boolean
  expanded?: boolean | React.ReactNode | string
  className?: string
  expansion?: boolean
  color?: TrilogyColor | TrilogyColorValues
}

export type TableTrPropsNative = TableTrPropsWeb & ReferenceableNative<TouchableOpacity>

export type TableTrProps = TableTrPropsWeb & Referenceable<HTMLTableRowElement>
