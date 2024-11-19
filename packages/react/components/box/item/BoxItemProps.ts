import { BoxItemSize, BoxItemSizeValues } from '@/components/box/item/BoxItemEnum'

export interface BoxItemProps {
  children?: React.ReactNode
  className?: string
  size?: BoxItemSize | BoxItemSizeValues
}
