import { IconName, IconNameValues } from '@/components/icon'
import { StepperStepMarkup, StepperStepMarkupValues } from '@/components/stepper/step/StepperStepEnum'

/**
 * Stepper Step Interface
 */
export interface StepperStepProps {
  children?: React.ReactNode
  active?: boolean
  current?: boolean
  done?: boolean
  label?: string
  step?: number | string
  className?: string
  markup?: StepperStepMarkup | StepperStepMarkupValues
  iconName?: IconName | IconNameValues
  error?: boolean
}
