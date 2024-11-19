import type { ButtonProps } from '@/components/button/ButtonProps'
import type { DividerProps } from '@/components/divider/DividerProps'
import type { Centerable } from '@/objects/facets/Centerable'

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
export interface ButtonListWebProps extends ButtonListProps, Centerable {
  className?: string
  vertical?: boolean
}
