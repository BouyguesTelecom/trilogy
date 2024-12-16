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

/**
 * Specifies autocomplete hints for the system, so it can provide autofill.
 *
 * @see {@link https://reactnative.dev/docs/next/textinput#autocomplete}
 */
export enum InputAutoCompleteType {
  ADDITIONAL_NAME = 'additional-name',
  ADDRESS_LINE1 = 'address-line1',
  ADDRESS_LINE2 = 'address-line2',
  /** iOS 17+ */
  CC_CSC = 'cc-csc',
  /** iOS 17+ */
  CC_EXP = 'cc-exp',
  /** iOS 17+ */
  CC_EXP_DAY = 'cc-exp-day',
  /** iOS 17+ */
  CC_EXP_MONTH = 'cc-exp-month',
  /** iOS 17+ */
  CC_EXP_YEAR = 'cc-exp-year',
  CC_NUMBER = 'cc-number',
  COUNTRY = 'country',
  CURRENT_PASSWORD = 'current-password',
  EMAIL = 'email',
  FAMILY_NAME = 'family-name',
  GIVEN_NAME = 'given-name',
  HONORIFIX_PREFIX = 'honorific-prefix',
  HONORIFIC_SUFFIX = 'honorific-suffix',
  NAME = 'name',
  NEW_PASSWORD = 'new-password',
  OFF = 'off',
  ONE_TIME_CODE = 'one-time-code',
  POSTAL_CODE = 'postal-code',
  STREET_ADDRESS = 'street-address',
  TEL = 'tel',
  USERNAME = 'username',

  /** iOS only / iOS 17+ */
  CC_FAMILY_NAME = 'cc-family-name',
  /** iOS only / iOS 17+ */
  CC_GIVEN_NAME = 'cc-given-name',
  /** iOS only / iOS 17+ */
  CC_MIDDLE_NAME = 'cc-middle-name',
  /** iOS only / iOS 17+ */
  CC_NAME = 'cc-name',
  /** iOS only / iOS 17+ */
  CC_TYPE = 'cc-type',
  /** iOS only */
  NICKNAME = 'nickname',
  /** iOS only */
  ORGANIZATION = 'organization',
  /** iOS only */
  ORGANIZATION_TITLE = 'organization-title',
  /** iOS only */
  URL = 'url',

  /** Android only */
  GENDER = 'gender',
  /** Android only */
  NAME_FAMILY = 'name-family',
  /** Android only */
  NAME_GIVEN = 'name-given',
  /** Android only */
  NAME_MIDDLE = 'name-middle',
  /** Android only */
  NAME_MIDDLE_INITIAL = 'name-middle-initial',
  /** Android only */
  NAME_PREFIX = 'name-prefix',
  /** Android only */
  NAME_SUFFIX = 'name-suffix',
  /**
   * Android only
   * @deprecated Prefer using 'current-password'
   **/
  PASSWORD = 'password',
  /**
   * Android only
   * @deprecated Prefer using 'new-password'
   **/
  PASSWORD_NEW = 'password-new',
  /** Android only */
  POSTAL_ADDRESS = 'postal-address',
  /**
   * Android only
   * @deprecated Prefer using 'country'
   **/
  POSTAL_ADDRESS_COUNTRY = 'postal-address-country',
  /** Android only */
  POSTAL_ADDRESS_EXTENDED = 'postal-address-extended',
  /** Android only */
  POSTAL_ADDRESS_EXTENDED_POSTAL_CODE = 'postal-address-extended-postal-code',
  /** Android only */
  POSTAL_ADDRESS_LOCALITY = 'postal-address-locality',
  /** Android only */
  POSTAL_ADDRESS_REGION = 'postal-address-region',
  /** Android only */
  SMS_OTP = 'sms-otp',
  /** Android only */
  TEL_COUNTRY_CODE = 'tel-country-code',
  /** Android only */
  TEL_DEVICE = 'tel-device',
  /** Android only */
  TEL_NATIONAL = 'tel-national',
  /** Android only */
  USERNAME_NEW = 'username-new',
}

export type InputAutoCompleteTypeValues = `${InputAutoCompleteType}`

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
