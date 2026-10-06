import { View } from 'react-native'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { StatusProps } from '@/objects/facets/Status'
import { AlertMarkup, AlertMarkupValues } from '@/components/alert/AlertEnum'
import { ReactNode } from 'react'

export enum ToasterAlertPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}
export enum ToasterAlertFloat {
  RIGHT = 'right',
  LEFT = 'left',
}

export interface ToasterStatusProps extends StatusProps, Clickable, Accessibility, Dev {
  children?: ReactNode
  className?: string
  toasterChildren?: ReactNode
  iconName?: IconName | IconNameValues
  title?: string | ReactNode
  description?: string | ReactNode
  deletable?: ClickEvent | boolean
  closable?: ClickEvent
  position?: ToasterAlertPosition
  float?: ToasterAlertFloat
  duration?: number
  offset?: number
  display?: boolean
  onShow?: () => void
  onHide?: () => void
  markup?: AlertMarkup | AlertMarkupValues
}

/**
 * Alert Interface
 */
export interface AlertProps extends StatusProps, Clickable, Accessibility, Dev, CommonProps {
  iconName?: IconName | IconNameValues
  title?: string | ReactNode
  description?: string | ReactNode
  display?: boolean
  toaster?: boolean
  banner?: boolean
  markup?: AlertMarkup | AlertMarkupValues
}

export type AlertRef = HTMLDivElement
export type AlertNativeRef = View
