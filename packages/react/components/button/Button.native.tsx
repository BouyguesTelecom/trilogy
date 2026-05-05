import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { View } from '@/components/view'
import { getTypographyBoldStyle, TypographyBold } from '@/objects/Typography/TypographyBold'
import { getButtonColorStyle, getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getLoadingClassName } from '@/objects/facets/Loadable'
import { getVariantClassName } from '@/objects/facets/Variant'
import * as React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ButtonVariant } from './ButtonEnum'
import { ButtonNativeRef, ButtonProps } from './ButtonProps'

/**
 * Button component
 * @param loading {boolean} Loading button
 * @param disabled {boolean} Disabled button
 * @param variant {ButtonVariant} Button variant : accent|primary|secondary|ghost.
 * @param children {ReactNode} Button child
 * @param fullwidth {boolean} Fullwidth button
 * @param onClick {Function} Click Event
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * @param iconName {IconName} If Icon, Button + Icon && Button IconName
 * @param id {string} Custom id for button (ONLY FOR WEB)
 */
const Button = React.forwardRef<ButtonNativeRef, ButtonProps>(
  (
    { children, variant, onClick, disabled, loading, fullwidth, testId, accessibilityLabel, iconName, ...others },
    ref,
  ): JSX.Element => {
    const loaderColor = getColorStyle(TrilogyColor.BACKGROUND)
    const isLoading = typeof loading === 'string' && getLoadingClassName(loading) === 'loading'

    const background = disabled
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
      : TrilogyColor.MAIN

    const color =
      variant && ['secondary', 'ghost'].includes(getVariantClassName(variant))
        ? TrilogyColor.FONT
        : TrilogyColor.BACKGROUND

    const borderColor =
      disabled && variant === ButtonVariant.PRIMARY
        ? TrilogyColor.DISABLED
        : !disabled && !!loading && variant === ButtonVariant.PRIMARY
        ? TrilogyColor.DISABLED
        : !disabled && variant === ButtonVariant.PRIMARY
        ? TrilogyColor.INFO_FADE
        : TrilogyColor.BACKGROUND

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
        backgroundColor: getColorStyle(background),
        borderRadius: 4,
        minHeight: 45,
        height: loading ? 52 : 'auto',
        borderColor: getColorStyle(borderColor),
      },
      text: {
        fontFamily: getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_SEMIBOLD),
        color: getColorStyle(color),
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
        color: getColorStyle(TrilogyColor.DISABLED),
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
        color: getColorStyle(color),
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
        ref={ref}
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
            <Text style={(!disabled && styles.buttonIconText) || (disabled && styles.textDisabledIcon)}>
              {children}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    )
  },
)

Button.displayName = ComponentName.Button

export default Button
