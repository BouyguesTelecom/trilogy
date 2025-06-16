export type DateValue = Date | [Date, Date] | [Date]

export interface CalendarProps {
  value?: DateValue
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  readOnly?: boolean
  onChange?: (e: Date) => void
  disabledDates?: Date[]
}
