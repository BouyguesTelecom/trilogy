import { DimensionValue } from 'react-native'

import { Clickable } from '@/objects/facets/Clickable'
import { Flexable } from '@/objects/facets/Flexable'

type Styles = { [key: string]: unknown }

export interface ImageProps extends Clickable, Flexable {
  className?: string
  src: string | number
  alt?: string
  rounded?: boolean
  width?: DimensionValue | number | undefined
  height?: DimensionValue | number | undefined
  style?: Styles
}
