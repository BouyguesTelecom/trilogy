import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { View } from '@/components/view'
import { forwardRef, useMemo } from 'react'
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native'
import { ButtonVariant } from '@/components/button/ButtonEnum'
import { ButtonNativeRef, ButtonProps } from '@/components/button/ButtonProps'
import { getLoadingClassName } from '@/helpers/loadable'
import { getTypographyBoldStyle } from '@/helpers/typography'
import { TrilogyColor } from '@/interfaces/Color'
import { TypographyBold } from '@/interfaces/TypographyBold'
import { useThemeButtonVariant } from '@/hooks/useThemeBackground'
import { useTheme } from '@/hooks/useTheme'

/**
 * Button Component
 * @param loading {boolean} Loading button
 * @param disabled {boolean} Disabled button
 * @param variant {ButtonVariant} Button variant : accent|primary|secondary|ghost
 * @param children {ReactNode} Button child
 * @param fullwidth {boolean} Fullwidth button
 * @param onClick {Function} Click Event
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * @param iconName {IconName} Icon displayed inside the button
 */
const Button = forwardRef<ButtonNativeRef, ButtonProps>(
  (
    { children, variant, onClick, disabled, loading, fullwidth, testId, accessibilityLabel, iconName, ...others },
    ref,
  ): JSX.Element => {
    const { colors, radius, fonts } = useTheme()
    const { backgroundColor, textColor, borderColor, pressedBackgroundColor } = useThemeButtonVariant(
      disabled ? 'DISABLED' : variant,
    )

    const styles = useMemo(
      () =>
        StyleSheet.create({
          button: {
            maxWidth: '100%',
            minWidth: '100%',
            paddingTop: variant === ButtonVariant.PRIMARY ? 13 : 15,
            paddingBottom: variant === ButtonVariant.PRIMARY ? 13 : 15,
            paddingLeft: variant === ButtonVariant.PRIMARY ? 13 : 15,
            paddingRight: variant === ButtonVariant.PRIMARY ? 13 : 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: backgroundColor,
            borderRadius: radius.radiusXs,
            minHeight: 45,
            height: loading ? 52 : 'auto',
            borderColor: borderColor,
          },
          text: {
            fontFamily: fonts.fontTitle1,
            color: textColor,
            alignSelf: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            justifyContent: 'center',
          },
          textDisabled: {
            color: colors.textDisabled,
            alignSelf: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            justifyContent: 'center',
          },
          textDisabledIcon: {
            color: colors.textDisabled,
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
            color: textColor,
            alignSelf: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            justifyContent: 'center',
            marginLeft: 8,
          },
        }),
      [colors.textDisabled, radius.radiusXs, fonts.fontTitle1, backgroundColor, textColor, borderColor],
    )

    const buttonTestId = useMemo(
      () => (testId ? testId : typeof children === 'string' ? children : 'NotSpecified'),
      [testId, children],
    )
    const buttonAccessibilityLabel = useMemo(
      () => (accessibilityLabel ? accessibilityLabel : typeof children === 'string' ? children : 'NotSpecified'),
      [accessibilityLabel, children],
    )

    return (
      <Pressable
        ref={ref}
        accessible={!!buttonAccessibilityLabel}
        accessibilityLabel={buttonAccessibilityLabel}
        testID={buttonTestId}
        disabled={disabled || loading}
        style={({ pressed }) => [
          styles.button,
          fullwidth && styles.fullwidth,
          pressed && { backgroundColor: pressedBackgroundColor },
        ]}
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
            <ActivityIndicator color={colors.bgPrimary} testID='activity-indicator' />
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
            <ActivityIndicator color={colors.bgPrimary} testID='activity-indicator' />
          </View>
        )}
        {loading && typeof loading === 'string' && getLoadingClassName(loading) === 'loaded' && (
          <Text style={(!disabled && styles.text) || (disabled && styles.textDisabled)}>{children}</Text>
        )}
        {!loading && children && typeof children === 'string' && !iconName && (
          <Text style={(!disabled && styles.text) || (disabled && styles.textDisabled)}>{children}</Text>
        )}
        {!loading && iconName && (
          <View style={styles.buttonIconContainer}>
            <Icon name={iconName} size={IconSize.SMALL} color={textColor} testId='button-icon' />
            <Text style={(!disabled && styles.buttonIconText) || (disabled && styles.textDisabledIcon)}>
              {children}
            </Text>
          </View>
        )}
      </Pressable>
    )
  },
)

Button.displayName = ComponentName.Button

export default Button
