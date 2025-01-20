import * as React from 'react'
import { Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinkProps } from './LinkProps'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Link Component
 * @param to {string} Url to open
 * @param title {string} Title attribute
 * @param onClick {Function} onClick Event
 * @param children {React.ReactNode}
 * @param testId {string} id for test
 * @param accessibilityLabel {string}
 * @param inverted {boolean} Inverted link
 */
const Link = ({ children, to, onClick, testId, accessibilityLabel, inverted, ...others }: LinkProps): JSX.Element => {

  const styles = StyleSheet.create({
    linkAlignement: {
      alignSelf: 'baseline',
    },
    container: {
      padding: 8,
      marginTop: 0,
      marginBottom: -10,
      paddingLeft: 0,
      paddingRight: 0,
    },
    androidContainer: {
      paddingLeft: 0,
      paddingRight: 0,
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
          <Text
            accessibilityLabel={accessibilityLabel}
            style={Platform.OS === 'android' ? [styles.androidLink] : [styles.link]}
            {...others}
          >
            {children}
          </Text>
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
