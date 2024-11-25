import React from 'react'
import { Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { LinkProps } from '@/components/link/LinkProps'
import { Spacer, SpacerSize } from '@/components/spacer'
import { TextLevels } from '@/components/text/TextEnum'
import { TypographyAlign } from '@/objects/Typography/TypographyAlign'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

/**
 * Link Component
 * @param to {string} Url to open
 * @param title {string} Title attribute
 * @param typo {TypographyAlign} Typos align link
 * @param onClick {Function} onClick Event
 * @param children {React.ReactNode}
 * @param testId {string} id for test
 * @param accessibilityLabel {string}
 * @param inline {boolean} If link is inside paragraphe
 * @param level {TextLevels} if inline, size to match with Text
 * @param iconName {IconName} Adding Icon Link
 * @param inverted {boolean} Inverted link
 * @param style {Object} Additional styles
 */
const Link = React.forwardRef(
  (
    {
      children,
      to,
      title,
      typo,
      onClick,
      testId,
      accessibilityLabel,
      inline,
      level,
      iconName,
      inverted,
      style,
      ...others
    }: LinkProps,
    ref: React.Ref<View>,
  ): JSX.Element => {
    const linkLevels = (level: TextLevels) => {
      return (
        (level && level == TextLevels.ONE && 16) ||
        (level && level == TextLevels.TWO && 14) ||
        (level && level == TextLevels.THREE && 12) ||
        (level && level == TextLevels.FOUR && 10) ||
        10
      )
    }

    const getHeightLinkAndroid = (level: TextLevels) => {
      return (
        (level && level == TextLevels.ONE && 20) ||
        (level && level == TextLevels.TWO && 18) ||
        (level && level == TextLevels.THREE && 15) ||
        (level && level == TextLevels.FOUR && 13) ||
        14
      )
    }

    const styles = StyleSheet.create({
      linkAlignement: {
        alignSelf:
          (typo && !Array.isArray(typo) && typo === TypographyAlign.TEXT_CENTERED && 'center') ||
          (typo && Array.isArray(typo) && typo.includes(TypographyAlign.TEXT_CENTERED) && 'center') ||
          (typo && !Array.isArray(typo) && typo === TypographyAlign.TEXT_LEFT && 'flex-start') ||
          (typo && Array.isArray(typo) && typo.includes(TypographyAlign.TEXT_LEFT) && 'flex-start') ||
          (typo && !Array.isArray(typo) && typo === TypographyAlign.TEXT_RIGHT && 'flex-end') ||
          (typo && Array.isArray(typo) && typo.includes(TypographyAlign.TEXT_RIGHT) && 'flex-end') ||
          (typo && !Array.isArray(typo) && typo === TypographyAlign.TEXT_JUSTIFIED && 'auto') ||
          (typo && Array.isArray(typo) && typo.includes(TypographyAlign.TEXT_JUSTIFIED) && 'auto') ||
          'baseline',
      },
      container: {
        padding: inline ? 4 : 8,
        marginTop: inline ? -4 : 0,
        marginBottom: inline ? -3 : -10,
        paddingLeft: inline ? 4 : 0,
        paddingRight: inline ? 4 : 0,
      },
      androidContainer: {
        paddingLeft: inline ? 2 : 0,
        paddingRight: inline ? 2 : 0,
      },
      link: {
        color: (inverted && getColorStyle(TrilogyColor.BACKGROUND)) || getColorStyle(TrilogyColor.MAIN),
        fontSize: inline && level ? linkLevels(level) : 14,
        lineHeight: inline && level ? linkLevels(level) * 1.5 : 14,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
      },
      androidLink: {
        color: (inverted && getColorStyle(TrilogyColor.BACKGROUND)) || getColorStyle(TrilogyColor.MAIN),
        fontSize: inline && level ? linkLevels(level) : 14,
        lineHeight: inline && level ? linkLevels(level) * 1.5 : 14,
        height: inline && level ? getHeightLinkAndroid(level) : 'auto',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
      },
      iconView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      },
      icon: {
        paddingLeft: 4,
        paddingRight: 4,
      },
    })

    const linkTestId = testId ? testId : typeof children === 'string' ? children : 'NotSpecified'
    const linkAccessibilityLabel = accessibilityLabel
      ? accessibilityLabel
      : typeof children === 'string'
      ? children
      : 'NotSpecified'

    return (
      <View
        style={
          Platform.OS === 'android'
            ? [styles.linkAlignement, styles.androidContainer]
            : [styles.linkAlignement, styles.container]
        }
        accessible={!!linkAccessibilityLabel}
        accessibilityLabel={linkAccessibilityLabel}
        testID={linkTestId}
        ref={ref}
      >
        {children && typeof children.valueOf() === 'string' ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={(e) => {
              if (to) {
                Linking.openURL(to || '')
              }
              if (onClick) {
                onClick(e)
              }
            }}
          >
            {iconName ? (
              <View style={styles.iconView}>
                <Text accessibilityLabel={title || ''} style={[styles.link, style]} {...others}>
                  {children}
                </Text>
                <Spacer size={SpacerSize.ONE} horizontal />
                <Icon color={TrilogyColor.MAIN} name={iconName} style={styles.icon} size='small' />
              </View>
            ) : (
              <Text
                accessibilityLabel={title || ''}
                style={Platform.OS === 'android' ? [styles.androidLink, style] : [styles.link, style]}
                {...others}
              >
                {children}
              </Text>
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={(e) => {
              if (to) {
                Linking.openURL(to || '')
              }
              if (onClick) {
                onClick(e)
              }
            }}
          >
            {children}
          </TouchableOpacity>
        )}
      </View>
    )
  },
)

Link.displayName = ComponentName.Link
export default Link
