import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor } from '@/components/icon'
import { Text } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { DividerNativeRef, DividerProps } from './DividerProps'

/**
 * Divider Native Component
 * @param content {string} Add text content for Divider
 * @param unboxed {boolean} Full-width separator in another component
 * @param marginless {boolean} delete margin
 * @param iconName {IconName} Custom icon for Divider
 * @param color {TrilogyColor} Border color of Divider
 * @param others
 */
const Divider = React.forwardRef<DividerNativeRef, DividerProps>(
  ({ content, unboxed, marginless, iconName, ...others }, ref): JSX.Element => {
    const dividerColor = getColorStyle(TrilogyColor.NEUTRAL)

    const styles = StyleSheet.create({
      divider: {
        marginBottom: 16,
        marginTop: 16,
        borderBottomColor: dividerColor,
        borderBottomWidth: 1,
        width: '100%',
        alignSelf: ((unboxed || marginless) && 'stretch') || 'auto',
      },
      dividerContent: {
        borderBottomColor: dividerColor,
        borderBottomWidth: 1,
        flex: 1,
        width: 'auto',
      },
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '100%',
      },
      content: {
        backgroundColor: 'transparent',
        borderRadius: iconName ? 50 : 0,
        padding: iconName ? 6 : 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      textContent: {
        color: getColorStyle(TrilogyColor.MAIN),
      },
    })

    const ContentDivider = React.useMemo(() => {
      if (content) return <Text style={styles.textContent}>{content}</Text>
      if (iconName && !content) return <Icon name={iconName} color={IconColor.MAIN} testId='icon-id' />
    }, [content, iconName])

    if (content || iconName) {
      return (
        <View ref={ref} style={styles.container}>
          <View style={styles.content}>
            <View style={[styles.dividerContent]} {...others} />
            <View style={{ flex: 0, width: 'auto' }}>{ContentDivider}</View>
            <View style={[styles.dividerContent]} {...others} />
          </View>
        </View>
      )
    }

    return <View style={styles.divider} {...others} />
  },
)

Divider.displayName = ComponentName.Divider

export default Divider
