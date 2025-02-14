import { View } from 'react-native'
import type { DividerProps } from '../../../components/divider/DividerProps'
import type { RadioProps } from '../../../components/radio/RadioProps'
import { AlignableProps } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

type RadioListChildrenTypes = React.ReactElement<RadioProps | DividerProps> | undefined

/**
 * Radio List Interface
 */
export interface RadioListProps {
  children?: RadioListChildrenTypes | RadioListChildrenTypes[]
}

/**
 * Radio List Web Interface
 */
export interface RadioListWebProps extends Omit<AlignableProps, 'verticalAlign'>, RadioListProps, CommonProps {
  className?: string
  horizontalMobile?: boolean
  verticalDesktop?: boolean
  accessibilityLabelledBy?: string;
}

export type RadioListRef = HTMLDivElement
export type RadioListNativeRef = View
