import type { DividerProps } from '@/components/divider/DividerProps'
import type { RadioProps } from '@/components/radio/RadioProps'
import { Alignable, AlignableValues } from '@/objects/facets/Alignable'
import { CommonProps } from '@/objects/facets/CommonProps'

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
export interface RadioListWebProps extends RadioListProps, CommonProps {
  align?: Alignable | AlignableValues
  className?: string
  horizontalMobile?: boolean
  verticalDesktop?: boolean
}
