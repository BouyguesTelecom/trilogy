import type { Centerable, Layout } from '../../../objects'
import type { DividerProps } from '../../divider/DividerProps'
import type { RadioProps } from '../RadioProps'

type RadioListChildrenTypes = React.ReactElement<RadioProps | DividerProps> | undefined

/**
 * Radio List Interface
 */
export interface RadioListProps extends Layout {
  children?: RadioListChildrenTypes | RadioListChildrenTypes[]
}

/**
 * Radio List Web Interface
 */
export interface RadioListWebProps extends RadioListProps, Centerable {
  className?: string
  isMobile?: boolean
  vertical?: boolean
}
