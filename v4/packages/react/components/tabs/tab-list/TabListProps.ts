import { AlignableProps } from '@/objects/facets/Alignable'
import { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'
import { ScrollView } from 'react-native'
import { ReactNode } from 'react'

/**
 * Tabs Item Interface
 */
export interface TabListProps extends Dev, CommonProps {
  children: ReactNode
  align?: AlignableProps['align']
}

export type TabListRef = HTMLDivElement
export type TabListNativeRef = ScrollView
