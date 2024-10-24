import { AlignableProps } from '@/objects'
import { ColumnsSize } from '@/components/columns/ColumnsTypes'

/**
 * Columns Item Interface
 */
export interface ColumnsItemProps extends AlignableProps {
  children?: React.ReactNode
  size?: ColumnsSize
  mobileSize?: ColumnsSize
  tabletSize?: ColumnsSize
  touchSize?: ColumnsSize
  desktopSize?: ColumnsSize
  widescreenSize?: ColumnsSize
  fullhdSize?: ColumnsSize
  offset?: ColumnsSize
  mobileOffset?: ColumnsSize
  tabletOffset?: ColumnsSize
  touchOffset?: ColumnsSize
  desktopOffset?: ColumnsSize
  widescreenOffset?: ColumnsSize
  fullhdOffset?: ColumnsSize
  narrow?: boolean
  className?: string
  verticalCentered?: boolean
  centered?: boolean
}
