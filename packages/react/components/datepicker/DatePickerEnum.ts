/**
 * DatePicker Enum
 */
export enum DatePickerFormatEnum {
  DD_MM_YYYY = 'DD/MM/YYYY',
  MM_DD_YYYY = 'MM/DD/YYYY',
  YYYY_MM_DD = 'YYYY-MM-DD',
  DD_MM_YY = 'DD/MM/YY',
  MM_DD_YY = 'MM/DD/YY',
  YY_MM_DD = 'YY-MM-DD',
}

export type DatePickerFormatValues = `${DatePickerFormatEnum}`

export enum DatePickerModeEnum {
  DATE = 'date',
  DATETIME = 'datetime',
  TIME = 'time',
  MONTH = 'month',
  YEAR = 'year',
}

export type DatePickerModeValues = `${DatePickerModeEnum}`

export enum DatePickerVariantEnum {
  OUTLINED = 'outlined',
  FILLED = 'filled',
  STANDARD = 'standard',
}

export type DatePickerVariantValues = `${DatePickerVariantEnum}`
