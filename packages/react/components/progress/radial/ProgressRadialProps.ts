import { ProgressRadialItemProps } from '@/components/progress/radial/item/ProgressRadialItemProps'
import { AlignableProps } from '@/objects/facets/Alignable'
import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { CommonProps } from '@/objects/facets/CommonProps'
import { StatusProps } from '@/objects/facets/Status'
import React from 'react'

/**
 * Progress Radial Interface
 */

export interface ProgressRadialProps extends StatusProps, AlignableProps, CommonProps {
  children?: React.ReactElement<ProgressRadialItemProps> | React.ReactNode
  label?: string | React.ReactNode
  value?: number
  valueColor?: TrilogyColor | TrilogyColorValues
  secondValue?: number
  secondValueColor?: TrilogyColor | TrilogyColorValues
  description?: string | React.ReactNode
  full?: boolean
  disk?: boolean
  skeleton?: boolean
  small?: boolean
}
