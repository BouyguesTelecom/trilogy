import { SafeAreaView } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

/**
 * Otp Interface
 */
export interface OtpProps extends CommonProps, Dev {
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

export type OtpRef = HTMLDivElement
export type OtpNativeRef = SafeAreaView
