import { ScrollView } from 'react-native'
import { AlignableProps } from "@/interfaces/Alignable"
import { Dev } from "@/interfaces/Dev"
import { CommonProps } from "@/interfaces/CommonProps"
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
