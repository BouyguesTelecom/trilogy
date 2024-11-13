import { Alignable, AlignableValues } from '../../../objects'
import type { DividerProps } from '../../../components/divider/DividerProps'
import type { ButtonProps } from '../../../components/button/ButtonProps'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { ButtonListDirectionEnum, ButtonListDirectionEnumValues } from '@/components/button/list/ButtonListEnum'

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
