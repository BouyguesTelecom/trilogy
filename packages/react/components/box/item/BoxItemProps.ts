import { BoxItemSize, BoxItemSizeValues } from './BoxItemEnum'

export interface BoxItemProps {
  children?: React.ReactNode
  className?: string
  size?: BoxItemSize | BoxItemSizeValues
}
