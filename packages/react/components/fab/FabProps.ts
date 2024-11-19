import { DimensionValue } from 'react-native'

import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'

/**
 * Fab Interface
 */
export interface FabProps extends Accessibility, Clickable, Dev {
  children: string | React.ReactNode
  extended?: boolean
  iconName: IconName | IconNameValues
  className?: string
  fixed?: boolean
  top?: DimensionValue | number | undefined
  bottom?: DimensionValue | number | undefined
  left?: DimensionValue | number | undefined
  right?: DimensionValue | number | undefined
  disabled?: boolean
}
