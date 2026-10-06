import { Clickable, Dev, Referenceable, ReferenceableNative, TrilogyColor, TrilogyColorValues } from '../../../objects'
import { TouchableOpacity, View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { ReactNode } from 'react'

interface TableTrPropsWeb extends Clickable, Dev {
  children: ReactNode
  expandable?: boolean
  expanded?: boolean | ReactNode | string
  className?: string
  expansion?: boolean
  color?: TrilogyColor | TrilogyColorValues
}

export type TableTrPropsNative = TableTrPropsWeb & ReferenceableNative<TouchableOpacity>

export type TableTrProps = TableTrPropsWeb & Referenceable<HTMLTableRowElement> & CommonProps

export type TableTrRef = HTMLTableRowElement
export type TableTrNativeRef = View
