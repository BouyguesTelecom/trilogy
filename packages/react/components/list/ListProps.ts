/**
 * ListItem Interface
 */
import { ReactNode } from 'react'
import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

export interface ListProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
  divider?: boolean
  ordered?: boolean
}

export type ListRef = HTMLOListElement | HTMLUListElement
export type ListNativeRef = View
