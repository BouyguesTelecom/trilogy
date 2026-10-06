import { Dev } from '@/objects/facets/Dev'
import { TimepickerProps } from '@/components/timepicker/TimepickerProps'

export interface TimepickerDefaultProps extends Omit<Extract<TimepickerProps, { circular?: false }>, 'circular'>, Dev {}
