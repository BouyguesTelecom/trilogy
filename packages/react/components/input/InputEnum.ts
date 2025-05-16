import { HTMLInputTypeAttribute } from 'react'

/**
 * Input types
 */
export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
  PASSWORD = 'password',
  SEARCH = 'search',
  DATE = 'date',
  DATETIME_LOCAL = 'datetime-local',
  EMAIL = 'email',
}

export type InputTypeValues = `${InputType}` | HTMLInputTypeAttribute

export enum InputStatus {
  SUCCESS = 'success',
  WARNING = 'warning',
  /** @deprecated use ERROR instead */
  DANGER = 'danger',
  ERROR = 'error',
  DEFAULT = 'default',
}

export type InputStatusValues = `${InputStatus}`

export enum InputKeyboardAppearance {
  DEFAULT = 'default',
  LIGHT = 'light',
  DARK = 'dark',
}

export type InputKeyboardAppearanceValues = `${InputKeyboardAppearance}`

export enum InputAutoCapitalize {
  NONE = 'none',
  SENTENCES = 'sentences',
  WORDS = 'words',
  CHARACTERS = 'characters',
}

export type InputAutoCapitalizeValues = `${InputAutoCapitalize}`

export enum InputTextContentType {
  NONE = 'none',
  URL = 'URL',
  ADDRESS_CITY = 'addressCity',
  ADDRESS_CITY_STATE = 'addressCityAndState',
  ADDRESS_STATE = 'addressState',
  COUNTRY_NAME = 'countryName',
  CREDIT_CARD_NUMBER = 'creditCardNumber',
  EMAIL_ADDRESS = 'emailAddress',
  FAMILY_NAME = 'familyName',
  FULL_STREET_ADDRESS = 'fullStreetAddress',
  GIVEN_NAME = 'givenName',
  JOB_TITLE = 'jobTitle',
  LOCATION = 'location',
  MIDDLE_NAME = 'middleName',
  NAME = 'name',
  NAME_PREFIX = 'namePrefix',
  NAME_SUFFIX = 'nameSuffix',
  NICKNAME = 'nickname',
  ORGANIZATION_NAME = 'organizationName',
  POSTAL_CODE = 'postalCode',
  STREET_ADDRESS_LINE_ONE = 'streetAddressLine1',
  STREET_ADDRESS_LINE_TWO = 'streetAddressLine2',
  SUB_LOCALITY = 'sublocality',
  TELEPHONE_NUMBER = 'telephoneNumber',
  USERNAME = 'username',
  PASSWORD = 'password',
  NEW_PASSWORD = 'newPassword',
  ONE_TIME_CODE = 'oneTimeCode',
}

export type InputTextContentTypeValues = `${InputTextContentType}`

export enum InputKeyboardType {
  DEFAULT = 'default',
  EMAIL_ADDRESS = 'email-address',
  NUMERIC = 'numeric',
  PHONE_PAD = 'phone-pad',
  NUMBER_PAD = 'number-pad',
  DECIMAL_PAD = 'decimal-pad',
  VISIBLE_PASSWORD = 'visible-password',
  ASCII_CAPABLE = 'ascii-capable',
  NUMBERS_AND_PUNCTUATION = 'numbers-and-punctuation',
  URL = 'url',
  NAME_PHONE_PAD = 'name-phone-pad',
  TWITTER = 'twitter',
  WEB_SEARCH = 'web-search',
}

export type InputKeyboardTypeValues = `${InputKeyboardType}`
