import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import * as React from 'react'
import { useState } from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import { LinkNativeRef, LinkPropsNative } from './LinkProps'

/**
 * Link Component
 * @param children {React.ReactNode} Content children for Link
 * @param to {string} Use for router navigation
 * @param onClick {Function} onClick Event
 * @param accessibilityLabel {string} Accessibility label
 * @param iconName {IconName} Adding Icon to Link
 * @param inverted {boolean} Inverted link color
 * @param testId {string} Test Id for Test Integration
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
