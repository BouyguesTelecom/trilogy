import { Accessibility } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'
import React from 'react'

type RadioChangeEventHandler = (event: {
  radioValue: string
  radioName: string
  radioChecked: boolean
  radioId: string
}) => void

/**
 * radio Interface
 */

export type RadioProps = Pick<RadioPropsPossibilities, keyof RadioPropsPossibilities>
type RadioPropsPossibilities = RadioWithLabel | RadioWithChildren

interface RadioCommonProps extends Accessibility, CommonProps {
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  onChange?: RadioChangeEventHandler
  name?: string
  value?: string
}

interface RadioWithLabel extends RadioCommonProps {
  label: string
  children?: never
}

interface RadioWithChildren extends RadioCommonProps {
  children: React.ReactNode
  label?: never
}
