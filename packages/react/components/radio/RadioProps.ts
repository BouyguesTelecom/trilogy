import { TouchableOpacity } from 'react-native'
import { Accessibility } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

type RadioChangeEventHandler = (event: {
  radioValue: string
  radioName: string
  radioChecked: boolean
  radioId: string
}) => void

/**
 * radio Interface
 */
export interface RadioProps extends Accessibility, CommonProps {
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  label?: string
  onChange?: RadioChangeEventHandler
  name?: string
  value?: string
  required?: boolean
}

export type RadioRef = HTMLDivElement
export type RadioNativeRef = TouchableOpacity

