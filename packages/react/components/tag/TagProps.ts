import { IconName } from '@/components/icon'
import { TagVariant, TagVariantValues } from '@/components/tag/TagEnum'
import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Tag Interface
 */
export interface TagProps extends Accessibility, Dev, CommonProps {
  label: string
  variant?: TagVariant | TagVariantValues
  inverted?: boolean
  iconName?: IconName
  small?: boolean
}

export type TagRef = HTMLSpanElement
export type TagNativeRef = View
