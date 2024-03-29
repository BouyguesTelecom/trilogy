/**
 * Timeline Item Interface
 */
export interface TimelineItemProps {
  children: React.ReactNode
  done?: boolean
  active?: boolean
  undone?: boolean
  cancel?: boolean
}

/**
 * Timeline Item Web Interface
 */
export interface TimelineItemWebProps extends TimelineItemProps {
  className?: string
  done?: boolean
  active?: boolean
  undone?: boolean
  cancel?: boolean
}
