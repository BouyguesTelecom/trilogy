/**
 * ListItem Interface
 */
import { ReactNode } from 'react'
import { Accessibility } from '../../../objects'
import { IconName, IconNameValues } from '../../icon'

export enum ListIconStatus {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type ListIconStatusValues = `${ListIconStatus}`

export interface ListItemProps extends Accessibility {
  children?: ReactNode
  className?: string
  customIcon?: IconName | IconNameValues | ReactNode
  status?: ListIconStatus | ListIconStatusValues
  title?: string
  description?: string
  action?: ReactNode
  divider?: boolean
  inputAction?: ReactNode
}
