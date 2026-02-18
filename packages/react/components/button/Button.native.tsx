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
        margin: 0,
        padding: 0,
        lineHeight: 0,
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

    const isStringLoading = typeof loading === 'string'
    const isShowingLoader = (isStringLoading && getLoadingClassName(loading as string) === 'loading') || (typeof loading === 'boolean' && loading)
    const isLoaded = isStringLoading && getLoadingClassName(loading as string) === 'loaded'
    const showContent = !loading || isLoaded

    const iconColor = disabled
      ? TrilogyColor.DISABLED
      : variant === 'SECONDARY' || variant === 'GHOST'
      ? TrilogyColor.MAIN
      : TrilogyColor.BACKGROUND

    const textStyle = (!disabled && styles.text) || (disabled && styles.textDisabled)
    const iconTextStyle = (!disabled && styles.buttonIconText) || (disabled && styles.textDisabledIcon)

    const applyTextStyle = (node: React.ReactNode): React.ReactNode => {
      if (typeof node === 'string') {
        return <Text style={iconName ? iconTextStyle : textStyle}>{node}</Text>
      }
      if (React.isValidElement(node)) {
        const element = node as React.ReactElement<any>
        if (element.type === Text) {
          return React.cloneElement(element, {
            style: [iconName ? iconTextStyle : textStyle, element.props.style],
          })
        }
        if (element.props.children) {
          return React.cloneElement(element, {}, ...React.Children.map(element.props.children, applyTextStyle) || [])
        }
      }
      return node
    }

    const renderChildren = () => {
      if (typeof children === 'string') {
        return <Text style={iconName ? iconTextStyle : textStyle}>{children}</Text>
      }
      if (React.isValidElement(children)) {
        const styled = applyTextStyle(children) as React.ReactElement<any>
        return React.cloneElement(styled, {
          style: [
            { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...(iconName && { marginLeft: 8 }) },
            styled.props.style,
          ],
        })
      }
      return <>{children}</>
    }

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
        {isShowingLoader && (
          <View style={{ alignItems: 'center', justifyContent: 'center', height: 45 }}>
            <ActivityIndicator color={loaderColor} testID='activity-indicator' />
          </View>
        )}
        {showContent && children && (
          iconName ? (
            <View style={styles.buttonIconContainer}>
              <Icon name={iconName} size={IconSize.SMALL} color={iconColor} testId='button-icon' />
              {renderChildren()}
            </View>
          ) : (
            renderChildren()
          )
        )}
      </TouchableOpacity>
    )
  },
)

Button.displayName = ComponentName.Button

export default Button
