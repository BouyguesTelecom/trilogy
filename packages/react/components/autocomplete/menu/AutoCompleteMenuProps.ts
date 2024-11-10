import { CommonProps } from '../../../objects/facets/CommonProps'

export interface AutoCompleteMenuProps extends CommonProps {
  children?: React.ReactNode
  suggestions?: string[]
  handleSelectItem?: (text: string) => void
  absolute?: boolean
  testId?: string
  fullwidth?: boolean
}
