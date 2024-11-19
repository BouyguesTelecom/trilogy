import { ReactNode } from 'react'
import { Animated } from 'react-native'

import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'

export enum ListIconStatus {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type ListIconStatusValues = `${ListIconStatus}`

export interface ListItemProps extends Accessibility, Dev {
  children?: ReactNode
  className?: string
  customIcon?: IconName | IconNameValues | ReactNode
  status?: ListIconStatus | ListIconStatusValues
  title?: string
  description?: string
  action?: ReactNode
  divider?: boolean
  deletable?: ReactNode
}

export type AnimatedInterpolationProps = Animated.AnimatedInterpolation<number | string>
