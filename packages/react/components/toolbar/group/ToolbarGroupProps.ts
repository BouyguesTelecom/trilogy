/**
 * Toolbar Group Interface
 */
export interface ToolbarGroupProps {
  children: React.ReactNode
  elastic?: boolean
}

/**
 * Toolbar Group Web Interface
 */
export interface ToolbarGroupWebProps extends ToolbarGroupProps {
  className?: string
}
