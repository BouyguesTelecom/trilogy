import { View } from 'react-native'
import type { CheckboxProps } from '../../../components/checkbox/CheckboxProps'
import type { DividerProps } from '../../../components/divider/DividerProps'
import { AlignableProps } from '../../../objects/facets/Alignable'
import { CommonProps } from '../../../objects/facets/CommonProps'

type CheckboxListChildrenTypes = React.ReactElement<CheckboxProps | DividerProps> | undefined

/**
 * Checkbox List Interface
 */
export interface CheckboxListProps {
  children?: CheckboxListChildrenTypes | CheckboxListChildrenTypes[]
  label?: string
}

/**
 * Checkbox List Web Interface
 */
export interface CheckboxListWebProps extends CheckboxListProps, CommonProps {
  align?: AlignableProps['align']
  className?: string
  horizontalMobile?: boolean
  verticalDesktop?: boolean
  accessibilityLabelledBy?: string
}

export type CheckboxListRef = HTMLDivElement
export type CheckboxListNativeRef = View
