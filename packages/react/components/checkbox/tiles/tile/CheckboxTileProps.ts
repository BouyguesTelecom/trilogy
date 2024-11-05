import { IconName, IconNameValues } from '@/components/icon'
import { CheckboxProps } from '@/components/checkbox/CheckboxProps'

/**
 * Columns Item Interface
 */
export interface CheckboxTileProps extends CheckboxProps {
  horizontal?: boolean
  icon?: IconName | IconNameValues
  description?: string | React.ReactNode
}
