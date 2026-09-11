import { BadgePositionEnum } from '@/components/badge/BadgeEnum'
import { BadgeNativeRef, BadgeProps } from '@/components/badge/BadgeProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor, IconName, IconSize } from '@/components/icon'
import { useMemo, forwardRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusState } from '@/interfaces/Status'
import { TrilogyBackgroundColor, TrilogyColor, TrilogyTextColor } from '@/interfaces/Color'
import { useTheme } from '@/hooks/useTheme'
import { useThemeBackground } from '@/hooks/useThemeBackground'
import { useThemeTextColor } from '@/hooks/useThemeTextColor'

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
    const { radius, colors } = useTheme()
    const backgroundColor = useThemeBackground(variant || TrilogyBackgroundColor.PRIMARY)
    const textColor = useThemeTextColor(variant || TrilogyTextColor.PRIMARY)

    const styles = useMemo(
      () =>
        StyleSheet.create({
          badge: {
            alignSelf: 'baseline',
            minWidth: label ? 20 : 10,
            height: label ? 20 : 10,
            backgroundColor: !inverted ? backgroundColor : colors.bgPrimary,
            borderRadius: radius.radiusFull,
            justifyContent: 'center',
            alignItems: 'center',
          },
          text: {
            color: !inverted ? colors.bgPrimary : textColor,
            fontSize: 10,
          },
          iconStatus: {
            position: 'absolute',
            zIndex: 1000,
            backgroundColor: 'white',
            width: 16,
            minHeight: 16,
            borderRadius: radius.radiusFull,
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
        }),
      [backgroundColor, colors.bgPrimary, radius.radiusFull, textColor],
    )

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

    if (status) {
      return (
        <View {...others} ref={ref}>
          {icon.iconName && icon.iconColor && (
            <View>
              <View
                style={[
                  styles.iconStatus,
                  (position === BadgePositionEnum.TOP_LEFT && styles.iconStatusPositionTopLeft) ||
                    (position === BadgePositionEnum.TOP_RIGHT && styles.iconStatusPositionTopRight) ||
                    (position === BadgePositionEnum.BOTTOM_LEFT && styles.iconStatusPositionBottomLeft) ||
                    (position === BadgePositionEnum.BOTTOM_RIGHT && styles.iconStatusPositionBottomRight) ||
                    styles.iconStatusPositionTopLeft,
                ]}
              >
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
          <View style={styles.badge} {...others}>
            <Text style={styles.text}>{label}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.badge} {...others} ref={ref}>
        <Text style={styles.text}>{label}</Text>
        {!label && children && children}
      </View>
    )
  },
)

Badge.displayName = ComponentName.Badge

export default Badge
