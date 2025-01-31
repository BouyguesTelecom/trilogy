import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { TextLevels } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import * as React from 'react'
import { Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinkPropsNative } from './LinkProps'

/**
 * Link Component
 * @param to {string} Url to open
 * @param title {string} Title attribute
 * @param onClick {Function} onClick Event
 * @param children {React.ReactNode}
 * @param testId {string} id for test
 * @param accessibilityLabel {string}
 * @param inline {boolean} If link is inside paragraphe
 * @param iconName {IconName} Adding Icon Link
 * @param inverted {boolean} Inverted link
 */
const Link = ({
                children,
                to,
                onClick,
                testId,
                accessibilityLabel,
                inline,
                iconName,
                inverted,
                ...others
              }: LinkPropsNative): JSX.Element => {
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
      alignSelf: 'baseline',
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
      fontSize: 14,
      lineHeight: 14,
      textDecorationStyle: 'solid',
      textDecorationLine: 'underline',
    },
    androidLink: {
      color: (inverted && getColorStyle(TrilogyColor.BACKGROUND)) || getColorStyle(TrilogyColor.MAIN),
      fontSize: 14,
      lineHeight: 14,
      height: 'auto',
      textDecorationStyle: 'solid',
      textDecorationLine: 'underline',
    },
    iconView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginLeft: 4,
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
              <Text accessibilityLabel={accessibilityLabel} style={[styles.link]} {...others}>
                {children}
              </Text>
              <Icon color={TrilogyColor.MAIN} name={iconName} size='small' style={styles.icon} />
            </View>
          ) : (
            <Text
              accessibilityLabel={accessibilityLabel}
              style={Platform.OS === 'android' ? [styles.androidLink] : [styles.link]}
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
}

Link.displayName = ComponentName.Link

export default Link
