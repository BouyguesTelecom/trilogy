import { Accessibility, Dev } from '@/objects'

/**
 * Box Table Container Interface
 */
export interface BoxTableContainerProps extends Accessibility, Dev {
  children?: string | React.ReactNode
  className?: string
}
