import { AriaRole } from 'react'
import { Role, type Text } from 'react-native'
import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility } from "@/interfaces/Accessibility";
import { Clickable } from "@/interfaces/Clickable";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Link Interface
 */

interface Link extends Accessibility, Clickable, Dev, CommonProps {
  children?: React.ReactNode
  to?: string
  href?: string
  routerLink?: React.ElementType
  iconName?: IconName | IconNameValues
  inline?: boolean
  inverted?: boolean
  blank?: boolean
  title?: string
  rel?: string
  small?: boolean
}

export interface LinkProps extends Link {
  role?: AriaRole
}

export interface LinkPropsNative extends Link {
  role?: Role
}

export type LinkRef = HTMLElement | HTMLAnchorElement
export type LinkNativeRef = Text
