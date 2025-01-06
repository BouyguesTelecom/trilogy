import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor } from '@/components/icon'
import { Text } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { DividerProps } from './DividerProps'

/**
 * Divider Native Component
 * @param content {string} Add text content for Divider
 * @param unboxed {boolean} Full-width separator in another component
 * @param marginless {boolean} delete margin
 * @param iconName {IconName} Custom icon for Divider
 * @param color {TrilogyColor} Border color of Divider
 * @param others
 */
const Divider = ({ content, unboxed, marginless, iconName, inverted, ...others }: DividerProps): JSX.Element => {
  const [textWidth, setTextWidth] = React.useState(0)
  const [containerWidth, setContainerWidth] = React.useState(0)
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
      alignSelf: 'center',
      justifyContent: 'center',
      width: `${((containerWidth - (textWidth + 16)) / 2 / containerWidth) * 100}%`,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '100%',
    },
    content: {
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: iconName ? 50 : 0,
      padding: iconName ? 6 : 0,
    },
    textContent: {
      textAlign: 'center',
      color: getColorStyle(TrilogyColor.MAIN),
    },
  })

  const ContentDivider = React.useMemo(() => {
    if (content) return <Text style={styles.textContent}>{content}</Text>
    if (iconName && !content) return <Icon name={iconName} color={IconColor.MAIN} testId='icon-id' />
  }, [content, iconName])

  if (content || iconName) {
    return (
      <View
        style={styles.container}
        onLayout={(event) => {
          setContainerWidth(event.nativeEvent.layout.width)
        }}
      >
        <View style={styles.dividerContent} {...others} />
        <View
          style={styles.content}
          onLayout={(event) => {
            setTextWidth(event.nativeEvent.layout.width)
          }}
        >
          {ContentDivider}
        </View>
        <View style={styles.dividerContent} {...others} />
      </View>
    )
  }

  return <View style={styles.divider} {...others} />
}

Divider.displayName = ComponentName.Divider

export default Divider
