import { DatePickerStatus, DatePickerStatusValues } from './DatePickerEnum'

export type SegmentType = 'day' | 'month' | 'year'

export interface HandleKeyPress {
  event: React.KeyboardEvent<HTMLInputElement>
  type: 'day' | 'month' | 'year'
}

export interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | null) => void
  minDate?: Date
  maxDate?: Date
  className?: string
  label?: string
  sample?: string
  required?: boolean
  status?: DatePickerStatus | DatePickerStatusValues
  help?: string
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
