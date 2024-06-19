export interface AutoCompleteMenuProps {
  children?: React.ReactNode
  suggestions?: string[]
  handleSelectItem?: (text: string) => void
  className?: string
  absolute?: boolean
  testId?: string
  fullwidth?: boolean
}
