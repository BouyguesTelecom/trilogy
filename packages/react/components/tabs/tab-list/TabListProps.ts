import { AlignableProps, Dev, JustifiableProps } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'
import { ScrollView } from 'react-native'

/**
 * Tabs Item Interface
 */
export interface TabListProps extends Dev, CommonProps {
  children: React.ReactNode
  /**
   * @deprecated Use justify instead
   */
  align?: AlignableProps['align']
  justify?: JustifiableProps['justify']
}

export type TabListRef = HTMLDivElement
export type TabListNativeRef = ScrollView
