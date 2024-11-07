import { BoxItemSize, BoxItemSizeValues } from './BoxItemEnum'
import { CommonProps } from '@/objects/facets/CommonProps'

export interface BoxItemProps extends CommonProps {
  children?: React.ReactNode
  size?: BoxItemSize | BoxItemSizeValues
}
