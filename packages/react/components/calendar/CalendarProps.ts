import { Dev } from '@/interfaces/Dev'
import { CalendarYearsOrder, CalendarYearsOrderValues } from './CalendarEnum'

export type ChangeEventCalendar = Date | [Date, Date] | [Date] | []

export interface CalendarProps extends Dev {
  value?: ChangeEventCalendar
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  readOnly?: boolean
  onChange?: (e: ChangeEventCalendar) => void
  onMonthChange?: (e: Date) => void
  disabledDates?: Date[]
  yearsOrder?: CalendarYearsOrder | CalendarYearsOrderValues
}
