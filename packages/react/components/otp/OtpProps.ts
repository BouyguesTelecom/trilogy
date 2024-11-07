/**
 * Otp Interface
 */
export interface OtpProps {
  className?: string
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
