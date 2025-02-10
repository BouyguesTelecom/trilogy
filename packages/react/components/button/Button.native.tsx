import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { View } from '@/components/view'
import { getTypographyBoldStyle, TypographyBold } from '@/objects'
import {
  getButtonColorStyle,
  getColorStyle,
  getLoadingClassName,
  getVariantClassName,
  TrilogyColor,
} from '@/objects/facets'
import * as React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ButtonVariant } from './ButtonEnum'
import { ButtonProps } from './ButtonProps'

/**
 * Button Native Component
 * @param loading {boolean} Loading button
 * @param disabled {boolean} Disabled button
 * @param variant {Color} Button color : primary|secondary
 * @param children {React.ReactNode} Button child
 * @param onClick {Function} Click Event
 * @param fullwidth {boolean} Fullwidth button
 * @param testId {string} id for test
 * @param accessibilityLabel {string}
 * @param iconName {IconName} If Icon, Button + Icon && Button IconName
 */
const Button = ({
  children,
  variant,
  onClick,
  disabled,
  loading,
  fullwidth,
  testId,
  accessibilityLabel,
  iconName,
  ...others
}: ButtonProps): JSX.Element => {
  const loaderColor = getColorStyle(TrilogyColor.BACKGROUND)
  const isLoading = typeof loading === 'string' && getLoadingClassName(loading) === 'loading'

  const styles = StyleSheet.create({
    button: {
      maxWidth: '100%',
      minWidth: '100%',
      paddingTop: variant === ButtonVariant.PRIMARY ? 13 : 15,
      paddingBottom: variant === ButtonVariant.PRIMARY ? 13 : 15,
      paddingLeft: variant === ButtonVariant.PRIMARY ? 13 : 15,
      paddingRight: variant === ButtonVariant.PRIMARY ? 13 : 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: getColorStyle(
        disabled
          ? TrilogyColor.NEUTRAL_FADE
          : isLoading
          ? getButtonColorStyle(TrilogyColor.BACKGROUND)
          : typeof loading === 'boolean' && loading
          ? TrilogyColor.NEUTRAL
          : variant === ButtonVariant.SECONDARY
          ? TrilogyColor.MAIN_FADE
          : variant === ButtonVariant.CONVERSION
          ? TrilogyColor.ACCENT
          : variant === ButtonVariant.GHOST
          ? TrilogyColor.BACKGROUND
          : TrilogyColor.MAIN,
      ),
      borderRadius: 4,
      minHeight: 45,
      height: loading ? 52 : 'auto',
      borderColor: getColorStyle(
        disabled && variant === ButtonVariant.PRIMARY
          ? TrilogyColor.DISABLED
          : !disabled && !!loading && variant === ButtonVariant.PRIMARY
          ? TrilogyColor.DISABLED
          : !disabled && variant === ButtonVariant.PRIMARY
          ? TrilogyColor.INFO_FADE
          : TrilogyColor.BACKGROUND,
      ),
    },
    text: {
      fontFamily: getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_SEMIBOLD),
      color: getColorStyle(
        variant && ['secondary', 'ghost'].includes(getVariantClassName(variant))
          ? TrilogyColor.FONT
          : TrilogyColor.BACKGROUND,
      ),
      alignSelf: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
    },
    textDisabled: {
      color: getColorStyle(TrilogyColor.DISABLED),
      alignSelf: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
    },
    textDisabledIcon: {
      color: getColorStyle(TrilogyColor.DISABLED_FADE),
      alignSelf: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
      marginLeft: 12,
    },
    fullwidth: {
      alignSelf: 'stretch',
    },
    buttonIconContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
    },
    buttonIconText: {
      color: getColorStyle(
        variant && ['secondary', 'ghost'].includes(getVariantClassName(variant))
          ? TrilogyColor.FONT
          : TrilogyColor.BACKGROUND,
      ),
      alignSelf: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
      marginLeft: 8,
    },
  })

  const buttonTestId = testId ? testId : typeof children === 'string' ? children : 'NotSpecified'
  const buttonAccessibilityLabel = accessibilityLabel
    ? accessibilityLabel
    : typeof children === 'string'
    ? children
    : 'NotSpecified'

  return (
    <TouchableOpacity
      accessible={!!buttonAccessibilityLabel}
      accessibilityLabel={buttonAccessibilityLabel}
      testID={buttonTestId}
      disabled={disabled || loading}
      style={[styles.button, fullwidth && styles.fullwidth]}
      onPress={(e?: unknown) => onClick?.(e)}
      {...others}
    >
      {loading && typeof loading === 'string' && getLoadingClassName(loading) === 'loading' && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 45,
          }}
        >
          <ActivityIndicator color={loaderColor} testID='activity-indicator' />
        </View>
      )}
      {loading && typeof loading === 'boolean' && loading === true && (
        <View
          style={{
            alignItems: 'center',
            height: 45,
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator color={loaderColor} testID='activity-indicator' />
        </View>
      )}
      {loading && typeof loading === 'string' && getLoadingClassName(loading) === 'loaded' && (
        <Text style={(!disabled && styles.text) || (disabled && styles.textDisabled)}>{children}</Text>
      )}
      {!loading && children && typeof children === 'string' && !iconName && (
        <Text style={(!disabled && styles.text) || (disabled && styles.textDisabled)}>{children}</Text>
      )}
      {!loading && children && typeof children === 'string' && iconName && (
        <View style={styles.buttonIconContainer}>
          <Icon
            name={iconName}
            size={IconSize.SMALL}
            color={
              disabled
                ? TrilogyColor.DISABLED
                : variant === 'SECONDARY' || variant === 'GHOST'
                ? TrilogyColor.MAIN
                : TrilogyColor.BACKGROUND
            }
            testId='button-icon'
          />
          <Text style={(!disabled && styles.buttonIconText) || (disabled && styles.textDisabledIcon)}>{children}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

Button.displayName = ComponentName.Button

export default Button
