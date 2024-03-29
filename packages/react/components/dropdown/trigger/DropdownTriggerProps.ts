export interface DropdownTriggerClickEvent {
  active: boolean
}

type DropdownTriggerClickEventHandler = (event: DropdownTriggerClickEvent) => void

/**
 * Dropdown Trigger Interface
 */
export interface DropdownTriggerProps {
  children?: React.ReactNode
  onClick?: DropdownTriggerClickEventHandler
  active?: boolean
  label?: string
  placeholder?: string
  value?: Array<string | undefined>
}

/**
 * Dropdown Trigger Web Interface
 */
export interface DropdownTriggerWebProps extends DropdownTriggerProps {
  className?: string
}
