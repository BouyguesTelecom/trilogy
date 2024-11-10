import { IconName, IconNameValues } from '../../../../components/icon'
import { CheckboxProps } from '../../../../components/checkbox/CheckboxProps'
import { CommonProps } from '../../../../objects/facets/CommonProps'

/**
 * Columns Item Interface
 */
export interface CheckboxTileProps extends CheckboxProps, CommonProps {
  horizontal?: boolean
  icon?: IconName | IconNameValues
  description?: string | React.ReactNode
}
