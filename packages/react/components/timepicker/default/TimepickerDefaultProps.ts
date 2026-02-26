import { Dev } from '@/objects/facets/Dev'
import { TimepickerProps } from '../TimepickerProps'

export interface TimepickerDefaultProps extends TimepickerProps, Dev {
  label?: string
  sample?: string
  required?: boolean
  help?: string
}
