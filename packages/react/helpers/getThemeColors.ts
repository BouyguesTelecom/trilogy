export type ThemeBackgroundVariant =
  | 'INFORMATION'
  | 'INFORMATION_SUBTLE'
  | 'SUCCESS'
  | 'SUCCESS_SUBTLE'
  | 'WARNING'
  | 'WARNING_SUBTLE'
  | 'ERROR'
  | 'ERROR_SUBTLE'
  | 'PRIMARY'
  | 'PRIMARY_SUBTLE'
  | 'SECONDARY'
  | 'SECONDARY_SUBTLE'
  | 'ACCENT'
  | 'ACCENT_SUBTLE'
  | 'BRAND'
  | 'BRAND_SUBTLE'
  | 'DISABLED'
  | 'SELECTED'
  | 'SELECTED_HOVER'
  | 'SELECTED_PRESSED'
  | 'INACTIVE'
  | 'TRANSPARENT'

export type ThemeBackgroundVariantSubtle =
  | 'INFORMATION'
  | 'SUCCESS'
  | 'WARNING'
  | 'ERROR'
  | 'PRIMARY'
  | 'SECONDARY'
  | 'ACCENT'
  | 'BRAND'

export type ThemeBorderVariant =
  | 'INFORMATION'
  | 'SUCCESS'
  | 'WARNING'
  | 'ERROR'
  | 'PRIMARY'
  | 'ACCENT'
  | 'BRAND'
  | 'SELECTED'
  | 'INACTIVE'
  | 'INVERSE'
  | 'DISABLED'

/**
 * Function to get a theme background color by variant.
 * @param variant - The variant type for which to get the background color.
 * @returns The background color for the specified variant.
 */
export const getThemeBackground = (variant?: ThemeBackgroundVariant) => {
  switch (variant) {
    case 'INFORMATION':
      return 'bgInformation'
    case 'INFORMATION_SUBTLE':
      return 'bgInformationSubtle'
    case 'SUCCESS':
      return 'bgSuccess'
    case 'SUCCESS_SUBTLE':
      return 'bgSuccessSubtle'
    case 'WARNING':
      return 'bgWarning'
    case 'WARNING_SUBTLE':
      return 'bgWarningSubtle'
    case 'ERROR':
      return 'bgError'
    case 'ERROR_SUBTLE':
      return 'bgErrorSubtle'
    case 'PRIMARY':
      return 'bgPrimary'
    case 'PRIMARY_SUBTLE':
      return 'bgPrimarySubtle'
    case 'SECONDARY':
      return 'bgSecondary'
    case 'SECONDARY_SUBTLE':
      return 'bgSecondarySubtle'
    case 'ACCENT':
      return 'bgAccent'
    case 'ACCENT_SUBTLE':
      return 'bgAccentSubtle'
    case 'BRAND':
      return 'bgBrand'
    case 'BRAND_SUBTLE':
      return 'bgBrandSubtle'
    case 'DISABLED':
      return 'bgDisabled'
    case 'SELECTED':
      return 'bgSelected'
    case 'SELECTED_HOVER':
      return 'bgSelectedHover'
    case 'SELECTED_PRESSED':
      return 'bgSelectedPressed'
    case 'INACTIVE':
      return 'bgInactive'
    case 'TRANSPARENT':
      return 'transparent'
  }
}

/**
 * Function to get a theme background color by subtle variant.
 * @param variant - The subtle variant type for which to get the background color.
 * @returns The background color for the specified subtle variant.
 */
export const getThemeBackgroundSubtle = (variant?: ThemeBackgroundVariantSubtle) => {
  switch (variant) {
    case 'INFORMATION':
      return 'bgInformationSubtle'
    case 'SUCCESS':
      return 'bgSuccessSubtle'
    case 'WARNING':
      return 'bgWarningSubtle'
    case 'ERROR':
      return 'bgErrorSubtle'
    case 'PRIMARY':
      return 'bgPrimarySubtle'
    case 'SECONDARY':
      return 'bgSecondarySubtle'
    case 'ACCENT':
      return 'bgAccentSubtle'
    case 'BRAND':
      return 'bgBrandSubtle'
    default:
      return 'bgSecondarySubtle'
  }
}

/**
 * Function to get a theme background color by subtle variant.
 * @param variant - The subtle variant type for which to get the background color.
 * @returns The background color for the specified subtle variant.
 */
export const getThemeBorderColor = (variant?: ThemeBorderVariant) => {
  switch (variant) {
    case 'INFORMATION':
      return 'borderInformation'
    case 'SUCCESS':
      return 'borderSuccess'
    case 'WARNING':
      return 'borderWarning'
    case 'ERROR':
      return 'borderError'
    case 'PRIMARY':
      return 'border'
    case 'ACCENT':
      return 'borderAccent'
    case 'BRAND':
      return 'borderInformation'
    case 'DISABLED':
      return 'borderDisabled'
    case 'SELECTED':
      return 'borderSelected'
    case 'INVERSE':
      return 'borderInverse'
    case 'INACTIVE':
      return 'borderInactive'
    default:
      return 'border'
  }
}
