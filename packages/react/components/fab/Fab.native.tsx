import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor, IconName, IconSize } from '@/components/icon'
import { Text } from '@/components/text'
import { Alignable, getColorStyle, TrilogyColor, TypographyBold, TypographyColor } from '@/objects/index.native'
import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { FabNativeRef, FabProps } from './FabProps'

/**
 * Fab Native Component
 * @param children {string} label fab button
 * @param extended {boolean} extend fab button
 * @param iconName {IconName | IconNameValues} name of icon
 * @param accessibilityLabel {string} Accessibility label
 * @param onClick {ClickEvent} onClick Event
 * @param top {number} position top
 * @param left {number} position left
 * @param bottom {number} position bottom
 * @param right {number} position right
 * @param disabled {boolean} disabled button
 */
const Fab = React.forwardRef<FabNativeRef, FabProps>(
  (
    { children, accessibilityLabel, iconName, extended, onClick, top, bottom, left, right, disabled, testId },
    ref,
  ): JSX.Element => {
    const styles = StyleSheet.create({
      button: {
        backgroundColor: getColorStyle(TrilogyColor.MAIN),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        minHeight: 56,
        height: 'auto',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3,
        position: top || bottom || left || right ? 'absolute' : 'relative',
        top: top ? top : 'auto',
        right: right ? right : 'auto',
        left: left ? left : 'auto',
        bottom: bottom ? bottom : 'auto',
        width: extended ? 'auto' : 60,
        flexDirection: 'row',
        zIndex: 999,
      },
      label: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 10,
        marginRight: 16,
      },
      icon: {
        marginLeft: extended ? 16 : 0,
        marginRight: extended ? 8 : 0,
      },
      extended: {
        height: 56,
      },
    })

    return (
      <TouchableOpacity
        ref={ref}
        style={[styles.button, extended && styles.extended]}
        accessibilityLabel={accessibilityLabel}
        onPress={(e?: unknown) => onClick?.(e)}
        disabled={disabled}
        testID={testId}
      >
        {extended ? (
          <>
            <Icon
              name={iconName as IconName}
              color={IconColor.WHITE}
              size={IconSize.MEDIUM}
              align={Alignable.ALIGNED_CENTER}
            />
            <Text style={styles.label} typo={[TypographyColor.TEXT_WHITE, TypographyBold.TEXT_WEIGHT_SEMIBOLD]}>
              {children}
            </Text>
          </>
        ) : (
          <Icon
            name={iconName as IconName}
            color={IconColor.WHITE}
            size={IconSize.MEDIUM}
            align={Alignable.ALIGNED_CENTER}
          />
        )}
      </TouchableOpacity>
    )
  },
)

Fab.displayName = ComponentName.Fab

export default Fab
