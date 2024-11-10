/**
 * ListItem Interface
 */
import { ReactNode } from 'react'
import { Accessibility, Dev } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

export interface ListProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
  divider?: boolean
}
