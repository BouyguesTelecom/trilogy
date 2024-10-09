import { InputProps } from '@/components/input/InputProps'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

/**
 * InputPure Interface
 */
export interface InputPureProps extends InputProps {
  props?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}
