import * as React from "react"
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native"
import {
  TrilogyColor,
  getButtonColorStyle,
  getColorStyle,
  getLoadingClassName,
  getVariantClassName
} from "@/objects/facets"
import { ComponentName } from "@/components/enumsComponentsName"
import { Icon, IconSize } from "@/components/icon"
import { View } from "@/components/view"
import { ButtonVariant } from "./ButtonEnum"
import { ButtonProps } from "./ButtonProps"
import { getTypographyBoldStyle, TypographyBold } from "@/objects"

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

  const findBackgroundColor = ({
    disabled,
    loading,
    variant,
  }: ButtonProps): string => {
    return (
      (disabled && getColorStyle(TrilogyColor.NEUTRAL_FADE)) ||
      (typeof loading === "string" &&
      getLoadingClassName(loading) === "loading" &&
      getButtonColorStyle(TrilogyColor.BACKGROUND)) ||
      (typeof loading === "boolean" &&
      loading &&
      getColorStyle(TrilogyColor.NEUTRAL)) ||
      (variant === ButtonVariant.PRIMARY && getColorStyle(TrilogyColor.MAIN)) ||
      (variant === ButtonVariant.SECONDARY &&
        getColorStyle(TrilogyColor.MAIN_FADE)) ||
      (variant === ButtonVariant.CONVERSION &&
        getColorStyle(TrilogyColor.ACCENT)) ||
      (variant === ButtonVariant.GHOST && getColorStyle(TrilogyColor.BACKGROUND)) ||
      getColorStyle(TrilogyColor.MAIN)
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
        getColorStyle(TrilogyColor.DISABLED)) ||
      (!disabled &&
        !!loading &&
        variant === ButtonVariant.PRIMARY &&
        getColorStyle(TrilogyColor.DISABLED)) ||
      (!disabled &&
        variant === ButtonVariant.PRIMARY &&
        getColorStyle(TrilogyColor.INFO_FADE)) ||
      getColorStyle(TrilogyColor.BACKGROUND)
    )
  }

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
      fontFamily: getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_SEMIBOLD),
      color: disabled
        ? getColorStyle(TrilogyColor.BACKGROUND)
        : findTextColor({ variant }),
      alignSelf: "center",
      alignItems: "center",
      fontWeight: "bold",
      justifyContent: "center",
    },
    textDisabled: {
      color: getColorStyle(TrilogyColor.DISABLED_FADE),
      alignSelf: "center",
      alignItems: "center",
      fontWeight: "bold",
      justifyContent: "center",
    },
    textDisabledIcon: {
      color: getColorStyle(TrilogyColor.DISABLED_FADE),
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
            <ActivityIndicator color={getColorStyle(TrilogyColor.BACKGROUND)} testID='activity-indicator' />
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
          <ActivityIndicator color={getColorStyle(TrilogyColor.BACKGROUND)} testID='activity-indicator' />
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
              testId='button-icon'
            />
          ) : (
            <Icon
              testId='button-icon'
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
