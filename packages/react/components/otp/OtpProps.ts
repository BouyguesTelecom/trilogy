/**
 * Otp Interface
 */
export interface OtpProps {
  className?: string
  code?: string
  codeSize?: number
  disabled?: boolean
  error?: boolean
  onCompleted?: (code?: string) => void
  onFocus?: (focused: boolean) => void
  onChange?: (code?: string) => void
  activated?: boolean
  label?: string
  errorMessage?: React.ReactNode | string
  autoFocus?: boolean
}
