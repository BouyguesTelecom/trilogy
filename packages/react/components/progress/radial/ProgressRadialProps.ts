import React from 'react'
import { ProgressRadialItemProps } from '@/components/progress/radial/item/ProgressRadialItemProps'
import { View } from 'react-native'
import { AlignableProps } from "@/interfaces/Alignable";
import { Dev } from "@/interfaces/Dev";
import { StatusProps } from "@/interfaces/Status";
import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Progress Radial Interface
 */

export interface ProgressRadialProps extends StatusProps, AlignableProps, CommonProps, Dev {
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

export type ProgressRadialRef = HTMLDivElement
export type ProgressRadialNativeRef = View
