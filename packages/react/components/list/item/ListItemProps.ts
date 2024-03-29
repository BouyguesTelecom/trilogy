/**
 * ListItem Interface
 */
import { ReactNode } from 'react'
import { IconName, IconNameValues } from '../../icon'
import { Accessibility } from '../../../objects'

export enum ListIconStatus {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type ListIconStatusValues = `${ListIconStatus}`

export interface ListItemProps extends Accessibility {
  children?: ReactNode
  className?: string
  customIcon?: IconName | IconNameValues
  status?: ListIconStatus | ListIconStatusValues
  title?: string
  description?: string
}
