import { View } from 'react-native'
import type { DividerProps } from '../../../components/divider/DividerProps'
import type { CheckboxProps } from '../../../components/checkbox/CheckboxProps'
import { Alignable, AlignableValues } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

type CheckboxListChildrenTypes = React.ReactElement<CheckboxProps | DividerProps> | undefined

/**
 * Checkbox List Interface
 */
export interface CheckboxListProps {
  children?: CheckboxListChildrenTypes | CheckboxListChildrenTypes[]
  groupLabel?: string
}

/**
 * Checkbox List Web Interface
 */
export interface CheckboxListWebProps extends CheckboxListProps, CommonProps {
  align?: Alignable | AlignableValues
  className?: string
  horizontalMobile?: boolean
  verticalDesktop?: boolean
  accessibilityLabelledBy?: string;
}

export type CheckboxListRef = HTMLDivElement
export type CheckboxListNativeRef = View
