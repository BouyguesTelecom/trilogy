import { StepperStepMarkup, StepperStepMarkupValues } from './StepperStepEnum'
import { IconName, IconNameValues } from '@/components/icon'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Stepper Step Interface
 */
export interface StepperStepProps extends CommonProps {
  children?: React.ReactNode
  active?: boolean
  current?: boolean
  done?: boolean
  label?: string
  step?: number | string
  markup?: StepperStepMarkup | StepperStepMarkupValues
  iconName?: IconName | IconNameValues
  error?: boolean
}
