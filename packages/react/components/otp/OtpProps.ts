import { CommonProps } from '@/objects/facets/CommonProps'
import { SafeAreaView } from 'react-native'

/**
 * Otp Interface
 */
export interface OtpProps extends CommonProps {
  value?: string
  length?: number
  disabled?: boolean
  error?: boolean
  help?: string
  onCompleted?: (code?: string) => void
  onFocus?: (focused: boolean) => void
  onChange?: (code?: string) => void
  activated?: boolean
  label?: string
  autoFocus?: boolean
}

export interface OtpPropsAccessibility extends OtpProps {
  title?: string
}

export type OtpRef = HTMLDivElement
export type OtpNativeRef = SafeAreaView
