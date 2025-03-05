import { Alignable, AlignableValues, Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'
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
