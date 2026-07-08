import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor } from '@/components/icon'
import { Text } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { DividerNativeRef, DividerProps } from './DividerProps'

/**
 * Divider Component
 * @param content {string} Text content for Divider
 * @param unboxed {boolean} Full-width separator in another component
 * @param marginless {boolean} Remove margin
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 * @param iconName {IconName} Custom icon for Divider
 */
const Divider = React.forwardRef<DividerNativeRef, DividerProps>(({ content, unboxed, marginless, iconName, testId, ...others }, ref): JSX.Element => {
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
      testID={testId}
      ref={ref}
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

  return <View testID={testId} style={styles.divider} {...others} />
})

Divider.displayName = ComponentName.Divider

export default Divider
