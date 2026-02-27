import { Dev } from '@/objects/facets/Dev'
import { TimepickerProps } from '../TimepickerProps'

export interface TimepickerDefaultProps extends Omit<Extract<TimepickerProps, { circular?: false }>, 'circular'>, Dev {}
