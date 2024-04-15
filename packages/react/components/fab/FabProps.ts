import { IconName, IconNameValues } from '../icon'
import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'
import { Position } from '../../objects/facets/Position'
import { DimensionValue } from 'react-native'

/**
 * Fab Interface
 */
export interface FabProps extends Accessibility, Clickable, Position {
  children: string | React.ReactNode
  extended?: boolean
  iconName: IconName | IconNameValues
  className?: string
  fixed?: boolean
  top?: DimensionValue | number | undefined
  bottom?: DimensionValue | number | undefined
  left?: DimensionValue | number | undefined
  right?: DimensionValue | number | undefined
}
