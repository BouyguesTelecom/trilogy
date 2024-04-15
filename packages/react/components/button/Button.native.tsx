import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { View } from '../view'
import { getLoadingClassName } from '../../objects/facets/Loadable'
import { getVariantClassName, getVariantStyle } from '../../objects/facets/Variant'
import { getColorStyle, TrilogyColor } from '../../objects/facets/Color'
import { ButtonProps } from './ButtonProps'
import { Icon, IconSize } from '../icon'
import { ButtonColor } from './ButtonEnum'
import { ComponentName } from '../enumsComponentsName'

/*
 * Helpers (reduce complexity of component to meet sonarqube requirements)
 */

const findBackgroundColor = ({ disabled, loading, variant }: ButtonProps): string => {
  return (
    (disabled && variant === ButtonColor.TERTIARY && getColorStyle(TrilogyColor.WHITE)) ||
    (disabled && getColorStyle(TrilogyColor.GREY_DISABLED)) ||
    (!!loading && variant === ButtonColor.TERTIARY && getColorStyle(TrilogyColor.WHITE)) ||
    (typeof loading === 'string' && getLoadingClassName(loading) === 'loading' && '#7F7F7F') ||
    (typeof loading === 'boolean' && loading && '#7F7F7F') ||
    (variant && !disabled && getVariantStyle(variant)) ||
    (variant === ButtonColor.SECONDARY && getColorStyle(TrilogyColor.SECONDARY)) ||
    getColorStyle(TrilogyColor.PRIMARY)
  )
}

const findTextColor = ({ variant }: ButtonProps): string => {
  return (
    (variant && getVariantClassName(variant) === 'secondary' && getColorStyle(TrilogyColor.WHITE)) ||
    (variant && getVariantClassName(variant) === 'tertiary' && getColorStyle(TrilogyColor.SECONDARY)) ||
    getColorStyle(TrilogyColor.WHITE)
  )
}

const findBorderWidth = ({ variant }: ButtonProps): number => {
  return variant === ButtonColor.TERTIARY ? 2 : 0
}

const findBorderColor = ({ disabled, variant, loading }: ButtonProps): string => {
  return (
    (disabled && variant === ButtonColor.TERTIARY && getColorStyle(TrilogyColor.GREY_DISABLED)) ||
    (!disabled && !!loading && variant === ButtonColor.TERTIARY && getColorStyle(TrilogyColor.GREY_DISABLED)) ||
    (!disabled && variant === ButtonColor.TERTIARY && getColorStyle(TrilogyColor.BG_INFO)) ||
    getColorStyle(TrilogyColor.WHITE)
  )
}

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
  const styles = StyleSheet.create({
    button: {
      maxWidth: '100%',
      minWidth: '100%',
      paddingTop: variant === ButtonColor.TERTIARY ? 13 : 15,
      paddingBottom: variant === ButtonColor.TERTIARY ? 13 : 15,
      paddingLeft: variant === ButtonColor.TERTIARY ? 13 : 15,
      paddingRight: variant === ButtonColor.TERTIARY ? 13 : 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: findBackgroundColor({ disabled, loading, variant }),
      borderRadius: 4,
      minHeight: 45,
      height: loading ? 52 : 'auto',
      borderWidth: findBorderWidth({ variant }),
      borderColor: findBorderColor({ disabled, variant, loading }),
    },
    text: {
      fontFamily: 'poppins-semibold',
      color: findTextColor({ variant }),
      alignSelf: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
    },
    textDisabled: {
      color: getColorStyle(TrilogyColor.GREY),
      alignSelf: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
    },
    textDisabledIcon: {
      color: getColorStyle(TrilogyColor.GREY),
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
      color: findTextColor({ variant }),
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

  /**
   * Returns variant's classname depending on variant type
   * @param variantType {string} - VariantType
   * @returns {string} - Variant value
   */
  const iconColorVariant = (variantType?: string) => {
    if (variantType && ['PRIMARY', 'SECONDARY'].includes(variantType)) return TrilogyColor.WHITE
    if (variantType === 'TERTIARY') return TrilogyColor.SECONDARY
    return TrilogyColor.WHITE
  }

  return (
    <TouchableOpacity
      accessible={!!buttonAccessibilityLabel}
      accessibilityLabel={buttonAccessibilityLabel}
      testID={buttonTestId}
      disabled={disabled}
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
          <ActivityIndicator color={getColorStyle(TrilogyColor.GREY_DISABLED)} />
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
          <ActivityIndicator color={getColorStyle(TrilogyColor.GREY_DISABLED)} />
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
          {!disabled ? (
            <Icon name={iconName} size={IconSize.SMALL} color={iconColorVariant(variant)} />
          ) : (
            <Icon name={iconName} size={IconSize.SMALL} color={getColorStyle(TrilogyColor.GREY_DISABLED)} />
          )}
          <Text style={(!disabled && styles.buttonIconText) || (disabled && styles.textDisabledIcon)}>{children}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

Button.displayName = ComponentName.Button

export default Button
