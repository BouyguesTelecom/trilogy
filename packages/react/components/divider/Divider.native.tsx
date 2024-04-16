import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Icon, IconColor} from '../icon'
import {Text} from '../text'
import {DividerProps} from './DividerProps'
import {getColorStyle, TrilogyColor} from '../../objects'
import {ComponentName} from '../enumsComponentsName'

/**
 * Divider Native Component
 * @param content {string} Add text content for Divider
 * @param unboxed {boolean} Full-width separator in another component
 * @param marginless {boolean} Marginless divider
 * @param iconName {IconName} Custom icon for Divider
 * @param color {TrilogyColor} Border color of Divider
 * @param backgroundColor {TrilogyColor} Background color of Divider
 * @param textColor {TrilogyColor} Text color of Divider
 * @param others
 */
const Divider = ({
                   content,
                   unboxed,
                   marginless,
                   iconName,
                   color,
                   backgroundColor,
                   textColor,
                   ...others
                 }: DividerProps): JSX.Element => {
  const [textWidth, setTextWidth] = React.useState(0)
  const [containerWidth, setContainerWidth] = React.useState(0)
  const dividerColor = getColorStyle(TrilogyColor.GREY_LIGHT)

  const styles = StyleSheet.create({
    divider: {
      borderBottomColor: dividerColor,
      borderBottomWidth: 2,
      width: '100%',
      alignSelf: ((unboxed || marginless) && 'stretch') || 'auto',
    },
    dividerContent: {
      borderBottomColor: color ? getColorStyle(color) : dividerColor,
      borderBottomWidth: 2,
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
      backgroundColor: backgroundColor ? getColorStyle(backgroundColor) : 'transparent',
      borderRadius: iconName ? 50 : 0,
      padding: iconName ? 6 : 0,
    },
    textContent: {
      textAlign: 'center',
      color: textColor ? getColorStyle(textColor) : getColorStyle(TrilogyColor.TERTIARY),
    },
  })

  const ContentDivider = React.useMemo(() => {
    if (content) return <Text style={styles.textContent}>{content}</Text>
    if (iconName && !content) return <Icon name={iconName} color={textColor ? textColor : IconColor.TERTIARY}/>
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
