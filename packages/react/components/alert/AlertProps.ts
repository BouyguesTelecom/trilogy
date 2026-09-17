import { View } from 'react-native'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { AlertMarkup, AlertMarkupValues } from '@/components/alert/AlertEnum'
import { ClickEvent } from "@/interfaces/OnClickEvent";
import { Accessibility } from "@/interfaces/Accessibility";
import { Clickable } from "@/interfaces/Clickable";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";
import { StatusProps } from "@/interfaces/Status";

export enum ToasterAlertPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}
export enum ToasterAlertFloat {
  RIGHT = 'right',
  LEFT = 'left',
}

export interface ToasterStatusProps extends StatusProps, Clickable, Accessibility, Dev {
  children?: React.ReactNode
  className?: string
  toasterChildren?: React.ReactNode
  iconName?: IconName | IconNameValues
  title?: string | React.ReactNode
  description?: string | React.ReactNode
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
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  display?: boolean
  toaster?: boolean
  banner?: boolean
  markup?: AlertMarkup | AlertMarkupValues
}

export type AlertRef = HTMLDivElement
export type AlertNativeRef = View
