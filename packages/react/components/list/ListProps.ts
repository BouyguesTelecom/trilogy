/**
 * ListItem Interface
 */
import { Accessibility, Dev } from '@/objects'
import { ReactNode } from 'react'

export interface ListProps extends Accessibility, Dev {
  children?: ReactNode
  className?: string
  hasIcon?: boolean
}
