import type { Centerable } from '@/objects'
import type { DividerProps } from '@/components/divider/DividerProps'
import type { ButtonProps } from '@/components/button/ButtonProps'
import { CommonProps } from '@/objects/facets/CommonProps'

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
export interface ButtonListWebProps extends ButtonListProps, Centerable, CommonProps {
  vertical?: boolean
}
