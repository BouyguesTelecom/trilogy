/**
 * ListItem Interface
 */
import { IconName, IconNameValues } from '../../../components/icon'
import { Accessibility, Dev } from '../../../objects'
import { ReactNode } from 'react'
import { Animated, type View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'

export enum ListIconStatus {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type ListIconStatusValues = `${ListIconStatus}`

export interface ListItemProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
  iconName?: IconName | IconNameValues
  status?: ListIconStatus | ListIconStatusValues
}

export type AnimatedInterpolationProps = Animated.AnimatedInterpolation<number | string>

export type ListItemRef = HTMLLIElement
export type ListItemNativeRef = View
