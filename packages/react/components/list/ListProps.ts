/**
 * ListItem Interface
 */
import { ReactNode } from 'react'
import { Accessibility, Dev } from '../../objects'

export interface ListProps extends Accessibility, Dev {
  children?: ReactNode
  className?: string
  hasIcon?: boolean
}
