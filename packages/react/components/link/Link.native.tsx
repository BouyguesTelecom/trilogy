import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import * as React from 'react'
import { useState } from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import { LinkNativeRef, LinkPropsNative } from './LinkProps'

/**
 * Link Component
 * @param to {string} Url to open
 * @param title {string} Title attribute
 * @param onClick {Function} onClick Event
 * @param children {React.ReactNode}
 * @param testId {string} id for test
 * @param accessibilityLabel {string}
 * @param iconName {IconName} Adding Icon Link
 * @param inverted {boolean} Inverted link
 */
const Link = React.forwardRef<LinkNativeRef, LinkPropsNative>(
  ({ children, to, onClick, testId, accessibilityLabel, iconName, inverted, ...others }, ref): JSX.Element => {
    const [pressedLink, setPressedLink] = useState(false)

    const styles = StyleSheet.create({
      link: {
        color: getColorStyle(
          (pressedLink && TrilogyColor.MAIN_FADE) || (inverted && TrilogyColor.BACKGROUND) || TrilogyColor.MAIN,
        ),
        fontSize: 14,
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

    return (
      <>
        {children && typeof children.valueOf() === 'string' ? (
          <Text
            ref={ref}
            testID={testId}
            suppressHighlighting={true}
            onPressIn={() => setPressedLink(true)}
            onPressOut={() => setPressedLink(false)}
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
                <View style={styles.icon}>
                  <Icon color={TrilogyColor.MAIN} name={iconName} size='small' />
                </View>
              </View>
            ) : (
              <Text accessibilityLabel={accessibilityLabel} style={[styles.link]} {...others}>
                {children}
              </Text>
            )}
          </Text>
        ) : (
          <Text
            testID={testId}
            suppressHighlighting={true}
            onPressIn={() => setPressedLink(true)}
            onPressOut={() => setPressedLink(false)}
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
          </Text>
        )}
      </>
    )
  },
)

Link.displayName = ComponentName.Link

export default Link
