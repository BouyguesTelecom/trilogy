/**
 * ListItem Interface
 */
import { ReactNode } from 'react'
import { Accessibility } from '../../objects'

export interface ListProps extends Accessibility {
  children?: ReactNode
  className?: string
  hasIcon?: boolean
}
