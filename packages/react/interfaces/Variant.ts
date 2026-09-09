/**
 * Variant State
 */
export enum VariantState {
  MAIN = 'MAIN',
  ACCENT = 'ACCENT',
  INFO = 'INFO',
}

export type VariantStateValues = `${VariantState}`

/**
 * Variant props
 */
export interface VariantProps {
  variant?: VariantState | VariantStateValues
}
