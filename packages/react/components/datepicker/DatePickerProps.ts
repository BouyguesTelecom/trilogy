import { DatePickerStatus, DatePickerStatusValues } from '@/components/datepicker/DatePickerEnum'
import { CommonProps } from '@/interfaces/CommonProps'
import { Dev } from '@/interfaces/Dev'
import { CalendarYearsOrder, CalendarYearsOrderValues } from '@/components/calendar/CalendarEnum'
import { Dispatch, InputEvent, SetStateAction } from 'react'

export type SegmentType = 'day' | 'month' | 'year'

export interface HandleKeyPress {
  event: InputEvent<HTMLSpanElement>
  type: 'day' | 'month' | 'year'
}

export interface DatePickerProps extends Dev, CommonProps {
  value?: string | null
  onChange?: (date: string | null) => void
  minDate?: string
  maxDate?: string
  label?: string
  sample?: string
  required?: boolean
  status?: DatePickerStatus | DatePickerStatusValues
  help?: string
  disabled?: boolean
  disabledDates?: Date[]
  name?: string
  yearsOrder?: CalendarYearsOrder | CalendarYearsOrderValues
}

export interface Segment {
  sensitiveValue: number | false
  maxValue: number
  segment: string
  segmentPosition: number
  segmentSetter: Dispatch<SetStateAction<string>>
  label: string
  initValue: string
}

export interface Segments {
  day: Segment
  month: Segment
  year: Segment
}
