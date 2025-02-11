import { Accessibility } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'
import React from 'react'

type CheckboxChangeEventHandler = (event: {
  checkboxValue: string
  checkboxName: string
  checkboxChecked: boolean
  checkboxId: string
}) => void

/**
 * Checkbox Interface
 */
export type CheckboxProps = Pick<CheckboxPropsPossibilities, keyof CheckboxPropsPossibilities>
type CheckboxPropsPossibilities = CheckboxWithLabel | CheckboxWithChildren;

interface CheckboxCommonProps extends Accessibility, CommonProps {
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  onChange?: CheckboxChangeEventHandler
  name?: string
  value?: string
}

interface CheckboxWithLabel extends CheckboxCommonProps {
  label: string
  children?: never
}

interface CheckboxWithChildren extends CheckboxCommonProps {
  children: React.ReactNode
  label?: never
}
