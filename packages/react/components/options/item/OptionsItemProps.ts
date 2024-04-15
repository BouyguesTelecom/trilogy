import { OptionsItemVariant, OptionsItemVariantValues } from '../OptionsEnum'
import { IconName, IconNameValues } from '../../icon/IconNameEnum'
import { Accessibility } from '../../../objects/facets/Accessibility'

export interface OptionsItemChangeEvent {
  optionId: string
  optionValue: string
  optionName: string
  optionChecked: boolean
}

type OptionsItemChangeEventHandler = (event: OptionsItemChangeEvent) => void

export interface OptionsItemClickEvent {
  optionId: string
  optionValue: string
  optionName: string
  optionChecked: boolean
}

type OptionsItemClickEventHandler = (event: OptionsItemClickEvent) => void

/**
 * Options Item Interface
 */
export interface OptionsItemProps extends Accessibility {
  children?: React.ReactNode
  disabled?: boolean
  readonly?: boolean
  onClick?: OptionsItemClickEventHandler
  onChange?: OptionsItemChangeEventHandler
  className?: string
  description?: string
  id?: string
  name?: string
  value: string
  variant?: OptionsItemVariant | OptionsItemVariantValues
  iconName?: IconName | IconNameValues
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checked?: any
  label?: string
}
