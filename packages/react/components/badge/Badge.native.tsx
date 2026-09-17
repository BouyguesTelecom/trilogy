import { BadgePositionEnum } from '@/components/badge/BadgeEnum'
import { BadgeNativeRef, BadgeProps } from '@/components/badge/BadgeProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor, IconName, IconSize } from '@/components/icon'
import { useMemo, forwardRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusState } from '@/interfaces/Status'
import { useTheme } from '@/hooks/useTheme'
import { THEME_TRILOGY } from '@trilogy-ds/react/theme'
import { getThemeBackground } from '@/helpers/getThemeColors'

/**
 * Badge Component
 * @param children {React.ReactNode} Content inside the badge (e.g. Icon)
 * @param label {string|number} Badge content text
 * @param inverted {boolean} Inverted style for Badge
 * @param status {StatusState} Badge status variant (INFO|SUCCESS|WARNING|ERROR)
 * @param variant {BadgeVariant} Badge color variant (SUCCESS|INFO|WARNING|ERROR|MAIN|ACCENT)
 * @param position {BadgePositionEnum} Badge position relative to parent element
 * @param onClick {Function} onClick Event for Badge
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 */
const Badge = forwardRef<BadgeNativeRef, BadgeProps>(
  ({ children, label, onClick, testId, variant, inverted, position, status, ...others }, ref): JSX.Element => {
    const { theme, mode } = useTheme()
    const colorStyle = mode === 'dark' ? darkStyles : lightStyles

    const contextStyles = useMemo(() => {
      if (!theme) return
      return {
        badge: {
          borderRadius: theme.radius.radiusFull,
          backgroundColor: variant ? theme.colors[getThemeBackground(variant)] : theme.colors.bgSecondary,
        },
        text: {
          color: inverted ? theme.colors.textPrimary : theme.colors.textInverse,
        },
        iconStatus: {
          borderRadius: theme.radius.radiusFull,
        },
      }
    }, [theme, variant, inverted])

    const icon = useMemo(() => {
      switch (status) {
        case StatusState.SUCCESS:
          return {
            iconName: IconName.CHECK_CIRCLE,
            iconColor: IconColor.SUCCESS,
          }
        case StatusState.WARNING:
          return {
            iconName: IconName.EXCLAMATION_CIRCLE,
            iconColor: IconColor.WARNING,
          }
        case StatusState.ERROR:
          return {
            iconName: IconName.TIMES_CIRCLE,
            iconColor: IconColor.ERROR,
          }
        case StatusState.INFORMATION:
          return {
            iconName: IconName.INFOS_CIRCLE,
            iconColor: IconColor.INFO,
          }
        default:
          return {
            iconName: null,
            iconColor: null,
          }
      }
    }, [status])

    const positionStyles = useMemo(() => {
      return (
        (position === BadgePositionEnum.TOP_LEFT && styles.iconStatusPositionTopLeft) ||
        (position === BadgePositionEnum.TOP_RIGHT && styles.iconStatusPositionTopRight) ||
        (position === BadgePositionEnum.BOTTOM_LEFT && styles.iconStatusPositionBottomLeft) ||
        (position === BadgePositionEnum.BOTTOM_RIGHT && styles.iconStatusPositionBottomRight) ||
        styles.iconStatusPositionTopLeft
      )
    }, [position])

    if (status) {
      return (
        <View {...others} ref={ref}>
          {icon.iconName && icon.iconColor && (
            <View>
              <View style={[styles.iconStatus, shapeStyles.badge, positionStyles, contextStyles?.iconStatus]}>
                <Icon name={icon.iconName} size={IconSize.SMALLER} color={icon.iconColor} />
              </View>
              <View>{children}</View>
            </View>
          )}
        </View>
      )
    }

    return onClick ? (
      <View {...others} ref={ref}>
        <TouchableOpacity onPress={onClick} activeOpacity={0.85} testID={testId}>
          <View
            style={[
              styles.badge,
              shapeStyles.badge,
              colorStyle[variant ?? 'DEFAULT'],
              label ? styles.badgeWithLabel : undefined,
              contextStyles?.badge,
            ]}
            {...others}
          >
            <Text style={[styles.text, colorStyle.text, inverted && colorStyle.textInverse, contextStyles?.text]}>
              {label}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    ) : (
      <View
        style={[
          styles.badge,
          shapeStyles.badge,
          colorStyle[variant ?? 'DEFAULT'],
          label ? styles.badgeWithLabel : undefined,
          contextStyles?.badge,
        ]}
        {...others}
        ref={ref}
      >
        <Text style={[styles.text, colorStyle.text, inverted && colorStyle.textInverse, contextStyles?.text]}>
          {label}
        </Text>
        {!label && children && children}
      </View>
    )
  },
)

Badge.displayName = ComponentName.Badge

export default Badge

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'baseline',
    minWidth: 10,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeWithLabel: {
    minWidth: 20,
    height: 20,
  },
  text: {
    fontSize: 10,
  },
  iconStatus: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: 'white',
    width: 16,
    minHeight: 16,
  },
  iconStatusPositionTopLeft: {
    top: -4,
    left: -4,
  },
  iconStatusPositionTopRight: {
    top: -4,
    left: 17,
  },
  iconStatusPositionBottomLeft: {
    top: 17,
    left: -4,
  },
  iconStatusPositionBottomRight: {
    top: 17,
    left: 17,
  },
})

const lightStyles = StyleSheet.create({
  text: {
    color: THEME_TRILOGY.colors.light.textInverse,
  },
  textInverse: {
    color: THEME_TRILOGY.colors.light.textPrimary,
  },
  DEFAULT: {
    backgroundColor: THEME_TRILOGY.colors.light.bgSecondary,
  },
  SUCCESS: {
    backgroundColor: THEME_TRILOGY.colors.light.bgSuccess,
  },
  INFORMATION: {
    backgroundColor: THEME_TRILOGY.colors.light.bgInformation,
  },
  WARNING: {
    backgroundColor: THEME_TRILOGY.colors.light.bgWarning,
  },
  ERROR: {
    backgroundColor: THEME_TRILOGY.colors.light.bgError,
  },
  PRIMARY: {
    backgroundColor: THEME_TRILOGY.colors.light.bgPrimary,
  },
  SECONDARY: {
    backgroundColor: THEME_TRILOGY.colors.light.bgSecondary,
  },
  BRAND: {
    backgroundColor: THEME_TRILOGY.colors.light.bgBrand,
  },
  ACCENT: {
    backgroundColor: THEME_TRILOGY.colors.light.bgAccent,
  },
  INVERTED: {
    backgroundColor: THEME_TRILOGY.colors.light.bgPrimary,
  },
})

const darkStyles = StyleSheet.create({
  text: {
    color: THEME_TRILOGY.colors.dark.textInverse,
  },
  textInverse: {
    color: THEME_TRILOGY.colors.dark.textPrimary,
  },
  DEFAULT: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgSecondary,
  },
  SUCCESS: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgSuccess,
  },
  INFORMATION: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgInformation,
  },
  WARNING: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgWarning,
  },
  ERROR: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgError,
  },
  PRIMARY: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgPrimary,
  },
  SECONDARY: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgSecondary,
  },
  BRAND: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgBrand,
  },
  ACCENT: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgAccent,
  },
  INVERTED: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgPrimary,
  },
})

export const shapeStyles = StyleSheet.create({
  badge: {
    borderRadius: THEME_TRILOGY.radius.radiusFull,
  },
})
