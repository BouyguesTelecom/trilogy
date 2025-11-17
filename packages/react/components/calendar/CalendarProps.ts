export type ChangeEventCalendar = Date | [Date, Date] | [Date] | []

export interface CalendarProps {
  value?: ChangeEventCalendar
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  readOnly?: boolean
  onChange?: (e: ChangeEventCalendar) => void
  onMonthChange?: (e: Date) => void
  disabledDates?: Date[]
}
