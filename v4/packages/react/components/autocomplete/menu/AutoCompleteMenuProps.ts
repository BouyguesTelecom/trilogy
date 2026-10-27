import { CommonProps } from '@/objects/facets/CommonProps'
import { ReactNode } from 'react'

export interface AutoCompleteMenuProps extends CommonProps {
  children?: ReactNode
  suggestions?: string[]
  handleSelectItem?: (text: string) => void
  absolute?: boolean
  testId?: string
  fullwidth?: boolean
}
