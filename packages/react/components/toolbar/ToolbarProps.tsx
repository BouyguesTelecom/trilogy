import { BackgroundProps } from '../../objects/atoms/Background'

/**
 * Toolbar Interface
 */
export interface ToolbarProps extends BackgroundProps {
  children?: React.ReactNode
  whiteBackground?: boolean
}

/**
 * Toolbar Web Interface
 */
export interface ToolbarWebProps extends ToolbarProps {
  className?: string
}
