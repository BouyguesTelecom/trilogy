/**
 * ListItem Interface
 */
import { Dev } from '@/lib'
import { ReactNode } from 'react'
import { Accessibility } from '../../objects'

export interface ListProps extends Accessibility, Dev {
  children?: ReactNode
  className?: string
  hasIcon?: boolean
}
