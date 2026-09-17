import { TimepickerProps } from '@/components/timepicker/TimepickerProps'
import { Dev } from "@/interfaces/Dev";

export interface TimepickerDefaultProps extends Omit<Extract<TimepickerProps, { circular?: false }>, 'circular'>, Dev {}
