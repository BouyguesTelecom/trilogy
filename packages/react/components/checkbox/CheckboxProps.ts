import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Accessibility } from '../../objects/facets/Accessibility'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

export type CheckboxChangeEventHandler = (event: {
  checkboxValue: string
  checkboxName: string
  checkboxChecked: boolean
  checkboxId: string
}) => void

/**
 * Checkbox Interface
 */
export type CheckboxProps = Pick<CheckboxPropsPossibilities, keyof CheckboxPropsPossibilities>
type CheckboxPropsPossibilities = CheckboxWithLabel | CheckboxWithChildren

interface CheckboxCommonProps extends Accessibility, CommonProps, Dev {
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  onChange?: CheckboxChangeEventHandler
  name?: string
  value?: string
  required?: boolean
}

interface CheckboxWithLabel extends CheckboxCommonProps {
  label: string
  children?: never
}

interface CheckboxWithChildren extends CheckboxCommonProps {
  children: React.ReactNode
  label?: never
}

export type CheckboxRef = HTMLDivElement
export type CheckboxNativeRef = React.ElementRef<typeof TouchableOpacity>
