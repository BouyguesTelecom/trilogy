import { View } from 'react-native'
import { IconName, IconNameValues } from '../../../components/icon'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

/**
 * Stepper Step Interface
 */
export interface StepProps extends CommonProps, Dev {
  active?: boolean
  current?: boolean
  done?: boolean
  label?: string
  iconName?: IconName | IconNameValues
  error?: boolean
}

export type StepRef = HTMLDivElement
export type StepNativeRef = View
