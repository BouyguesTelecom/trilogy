import type { Centerable, Layout } from '@/objects'
import type { DividerProps } from '@/components/divider/DividerProps'
import type { RadioProps } from '@/components/radio/RadioProps'

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
