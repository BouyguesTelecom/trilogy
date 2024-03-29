export interface DropdownItemClickEvent {
  itemId: string
  itemValue: string
  itemChecked: boolean
  itemLabel?: string
}

type DropdownItemClickEventHandler = (event: { itemId: string | undefined; itemValue: string; itemLabel: string | undefined; itemChecked: boolean }) => void

export interface DropdownItemChangeEvent {
  itemId: string
  itemValue: string
  itemChecked: boolean
  itemLabel?: string
}

type DropdownItemChangeEventHandler = (event: { itemId: string | undefined; itemValue: string; itemLabel: string | undefined; itemChecked: boolean }) => void

/**
 * Dropdown Item Interface
 */
export interface DropdownItemProps {
  children?: React.ReactNode
  disabled?: boolean
  onClick?: DropdownItemClickEventHandler
  onChange?: DropdownItemChangeEventHandler
  checked?: boolean
  label?: string
}

/**
 * Dropdown Item Web Interface
 */
export interface DropdownItemWebProps extends DropdownItemProps {
  className?: string
  id?: string
  value?: string
  name?: string
  readonly?: boolean
}
