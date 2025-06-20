export type DateValue = Date | [Date, Date] | [Date] | []

export interface CalendarProps {
  value?: DateValue
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  readOnly?: boolean
  onChange?: (e: DateValue) => void
  onViewChange?: (e: 'year' | 'month') => void
  onMonthChange?: (e: Date) => void
  disabledDates?: Date[]
}
