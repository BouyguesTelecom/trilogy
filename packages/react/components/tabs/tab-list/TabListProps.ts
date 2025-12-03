import { Alignable, AlignableValues } from '@/objects/facets/Alignable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ScrollView } from 'react-native'

/**
 * Tabs Item Interface
 */
export interface TabListProps extends Dev, CommonProps {
  children: React.ReactNode
  align?: Alignable | AlignableValues
}

export type TabListRef = HTMLDivElement
export type TabListNativeRef = ScrollView
