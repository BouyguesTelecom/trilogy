import { Clickable } from '@/objects'
import { Flexable } from '@/objects/facets/Flexable'
import { DimensionValue } from "react-native"

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
