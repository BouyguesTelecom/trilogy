import * as React from "react"
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native"
import { getLoadingClassName, getVariantClassName } from "../../objects"
import {
  TrilogyColor,
  getButtonColorStyle,
  getColorStyle,
} from "../../objects/facets/Color"
import { ComponentName } from "../enumsComponentsName"
import { Icon, IconSize } from "../icon"
import { View } from "../view"
import { ButtonVariant } from "./ButtonEnum"
import { ButtonProps } from "./ButtonProps"

/*
 * Helpers (reduce complexity of component to meet sonarqube requirements)
 */

const findBackgroundColor = ({
  disabled,
  loading,
  variant,
}: ButtonProps): string => {
  return (
    (typeof loading === "string" &&
    getLoadingClassName(loading) === "loading" &&
    getButtonColorStyle(TrilogyColor.BACKGROUND)) ||
    (typeof loading === "boolean" &&
    loading &&
    getColorStyle(TrilogyColor.NEUTRAL)) ||
    (disabled && variant && getColorStyle(TrilogyColor.DISABLED, 1)) ||
    (variant === ButtonVariant.PRIMARY && getColorStyle(TrilogyColor.MAIN)) ||
    (variant === ButtonVariant.SECONDARY &&
      getColorStyle(TrilogyColor.MAIN, 1)) ||
    (variant === ButtonVariant.CONVERSION &&
      getColorStyle(TrilogyColor.ACCENT, 1)) ||
    (variant === ButtonVariant.GHOST && getColorStyle(TrilogyColor.BACKGROUND)) ||
    (disabled &&
      variant === ButtonVariant.PRIMARY &&
      getButtonColorStyle(TrilogyColor.BACKGROUND)) ||
    (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
    getColorStyle(TrilogyColor.MAIN, 1)
  )
}

const findTextColor = ({ variant }: ButtonProps): string => {
  return (
    (variant &&
      getVariantClassName(variant) === "secondary" &&
      getColorStyle(TrilogyColor.FONT)) ||
    (variant &&
      getVariantClassName(variant) === "accent" &&
      getColorStyle(TrilogyColor.BACKGROUND)) ||
    (variant &&
      getVariantClassName(variant) === "primary" &&
      getColorStyle(TrilogyColor.BACKGROUND)) ||
    (variant &&
      getVariantClassName(variant) === "ghost" &&
      getColorStyle(TrilogyColor.FONT)) ||
    getColorStyle(TrilogyColor.BACKGROUND)
  )
}

const findBorderColor = ({
  disabled,
  variant,
  loading,
}: ButtonProps): string => {
  return (
    (disabled &&
      variant === ButtonVariant.PRIMARY &&
      getColorStyle(TrilogyColor.DISABLED, 0)) ||
    (!disabled &&
      !!loading &&
      variant === ButtonVariant.PRIMARY &&
      getColorStyle(TrilogyColor.DISABLED, 0)) ||
    (!disabled &&
      variant === ButtonVariant.PRIMARY &&
      getColorStyle(TrilogyColor.INFO, 1)) ||
    getColorStyle(TrilogyColor.BACKGROUND, 0)
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
      maxWidth: "100%",
      minWidth: "100%",
      paddingTop: variant === ButtonVariant.PRIMARY ? 13 : 15,
      paddingBottom: variant === ButtonVariant.PRIMARY ? 13 : 15,
      paddingLeft: variant === ButtonVariant.PRIMARY ? 13 : 15,
      paddingRight: variant === ButtonVariant.PRIMARY ? 13 : 15,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: findBackgroundColor({ disabled, loading, variant }),
      borderRadius: 4,
      minHeight: 45,
      height: loading ? 52 : "auto",
      borderColor: findBorderColor({ disabled, variant, loading }),
    },
    text: {
      fontFamily: "poppins-semibold",
      color: disabled
        ? getColorStyle(TrilogyColor.BACKGROUND)
        : findTextColor({ variant }),
      alignSelf: "center",
      alignItems: "center",
      fontWeight: "bold",
      justifyContent: "center",
    },
    textDisabled: {
      color: getColorStyle(TrilogyColor.DISABLED),
      alignSelf: "center",
      alignItems: "center",
      fontWeight: "bold",
      justifyContent: "center",
    },
    textDisabledIcon: {
      color: getColorStyle(TrilogyColor.DISABLED),
      alignSelf: "center",
      alignItems: "center",
      fontWeight: "bold",
      justifyContent: "center",
      marginLeft: 12,
    },
    fullwidth: {
      alignSelf: "stretch",
    },
    buttonIconContainer: {
      flexDirection: "row",
      alignSelf: "center",
      alignItems: "center",
      fontWeight: "bold",
      justifyContent: "center",
    },
    buttonIconText: {
      color: disabled
        ? getColorStyle(TrilogyColor.BACKGROUND)
        : findTextColor({ variant }),
      alignSelf: "center",
      alignItems: "center",
      fontWeight: "bold",
      justifyContent: "center",
      marginLeft: 8,
    },
  })

  const buttonTestId = testId
    ? testId
    : typeof children === "string"
    ? children
    : "NotSpecified"
  const buttonAccessibilityLabel = accessibilityLabel
    ? accessibilityLabel
    : typeof children === "string"
    ? children
    : "NotSpecified"

  /**
   * Returns variant's classname depending on variant type
   * @param variantType {string} - VariantType
   * @returns {string} - Variant value
   */
  const iconColorVariant = (variantType?: string) => {
    if (variantType && ["PRIMARY", "ACCENT"].includes(variantType))
      return TrilogyColor.BACKGROUND
    if (variantType === "SECONDARY" || variantType === "GHOST")
      return TrilogyColor.MAIN
    return TrilogyColor.BACKGROUND
  }

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
      {loading &&
        typeof loading === "string" &&
        getLoadingClassName(loading) === "loading" && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 45,
            }}
          >
            <ActivityIndicator color={getColorStyle(TrilogyColor.BACKGROUND)} />
          </View>
        )}
      {loading && typeof loading === "boolean" && loading === true && (
        <View
          style={{
            alignItems: "center",
            height: 45,
            justifyContent: "center",
          }}
        >
          <ActivityIndicator color={getColorStyle(TrilogyColor.BACKGROUND)} />
        </View>
      )}
      {loading &&
        typeof loading === "string" &&
        getLoadingClassName(loading) === "loaded" && (
          <Text
            style={
              (!disabled && styles.text) || (disabled && styles.textDisabled)
            }
          >
            {children}
          </Text>
        )}
      {!loading && children && typeof children === "string" && !iconName && (
        <Text
          style={
            (!disabled && styles.text) || (disabled && styles.textDisabled)
          }
        >
          {children}
        </Text>
      )}
      {!loading && children && typeof children === "string" && iconName && (
        <View style={styles.buttonIconContainer}>
          {!disabled ? (
            <Icon
              name={iconName}
              size={IconSize.SMALL}
              color={iconColorVariant(variant)}
            />
          ) : (
            <Icon
              name={iconName}
              size={IconSize.SMALL}
              color={getColorStyle(TrilogyColor.DISABLED)}
            />
          )}
          <Text
            style={
              (!disabled && styles.buttonIconText) ||
              (disabled && styles.textDisabledIcon)
            }
          >
            {children}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

Button.displayName = ComponentName.Button

export default Button
