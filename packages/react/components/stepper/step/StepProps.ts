import { IconName, IconNameValues } from '../../../components/icon'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Stepper Step Interface
 */
export interface StepProps extends CommonProps {
  active?: boolean
  current?: boolean
  done?: boolean
  label?: string
  iconName?: IconName | IconNameValues
  error?: boolean
}
