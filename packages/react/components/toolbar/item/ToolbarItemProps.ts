/**
 * Toolbar Item Interface
 */
export interface ToolbarItemProps {
  children: React.ReactNode
  clippedToBottom?: boolean
}

/**
 * Toolbar Item Web Interface
 */
export interface ToolbarItemWebProps extends ToolbarItemProps {
  className?: string
}
