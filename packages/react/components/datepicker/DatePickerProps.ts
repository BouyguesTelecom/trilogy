import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { DatePickerStatus, DatePickerStatusValues } from './DatePickerEnum'

export type SegmentType = 'day' | 'month' | 'year'

export interface HandleKeyPress {
  event: React.InputEvent<HTMLSpanElement>
  type: 'day' | 'month' | 'year'
}

export interface DatePickerProps extends Dev, CommonProps {
  value?: Date
  onChange?: (date: Date | null) => void
  minDate?: Date
  maxDate?: Date
  label?: string
  sample?: string
  required?: boolean
  status?: DatePickerStatus | DatePickerStatusValues
  help?: string
  disabled?: boolean
  disabledDates?: Date[]
}

export interface Segment {
  sensitiveValue: number | false
  maxValue: number
  segment: string
  segmentPosition: number
  segmentSetter: React.Dispatch<React.SetStateAction<string>>
  label: string
  initValue: string
}

export interface Segments {
  day: Segment
  month: Segment
  year: Segment
}
