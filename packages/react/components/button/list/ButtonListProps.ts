import { ButtonListDirectionEnum, ButtonListDirectionEnumValues } from '@/components/button/list/ButtonListEnum'
import { View } from 'react-native'
import type { ButtonProps } from '../../../components/button/ButtonProps'
import type { DividerProps } from '../../../components/divider/DividerProps'
import { Alignable, AlignableValues } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

type ButtonListChildrenTypes = React.ReactElement<ButtonProps | DividerProps> | undefined

/**
 * Button List Interface
 */
export interface ButtonListProps {
  children?: ButtonListChildrenTypes | ButtonListChildrenTypes[]
}

/**
 * Button List Web Interface
 */
export interface ButtonListWebProps extends ButtonListProps, CommonProps {
  direction?: ButtonListDirectionEnum | ButtonListDirectionEnumValues
  align?: Alignable | AlignableValues
}

export type ButtonListRef = HTMLDivElement
export type ButtonListNativeRef = View
