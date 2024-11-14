import React, { useContext } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { WithLocalSvg } from 'react-native-svg/css'

import { ComponentName } from '@/components/enumsComponentsName'
import { IconPosition } from '@/components/icon/IconEnum'
import { TextIconProps } from '@/components/icon/text/TextIconProps'
import { Text, TextLevels } from '@/components/text'
import { TrilogyThemeContext } from '@/context/providerTheme.native'
import { Alignable, getAlignStyle } from '@/objects/facets/Alignable'

const TextIcon = (
  {
    name,
    content,
    size,
    position,
    stretched,
    color,
    stacked,
    verticalAlign = Alignable.ALIGNED_CENTER,
    testId,
  }: TextIconProps,
  ref: React.Ref<View>,
): JSX.Element => {
  const {
    theme: { icons },
  } = useContext(TrilogyThemeContext)

  const styles = StyleSheet.create({
    iconText: {
      marginRight: (position === IconPosition.LEFT && 10) || 0,
      marginLeft: (position === IconPosition.RIGHT && 10) || 0,
      marginBottom: (position === IconPosition.UP && 10) || 0,
      marginTop: (position === IconPosition.DOWN && 10) || 0,
    },
    icon: {
      transform: Platform.OS === 'ios' ? (stretched && [{ skewX: '20deg' }]) || [{ skewX: '0deg' }] : [],
    },
    contentContainer: {
      alignItems: getAlignStyle(verticalAlign),
      flexDirection:
        (position === IconPosition.DOWN && 'column') || (position === IconPosition.UP && 'column-reverse') || 'row',
    },
    text: {
      textAlign: 'center',
      color: color,
    },
  })

  return (
    <View style={[{ width: '100%' }, styles.contentContainer]} testID={testId} ref={ref}>
      {!position && <Text style={styles.text}>{content}</Text>}

      {(position === IconPosition.RIGHT || position === IconPosition.DOWN) && content && (
        <Text style={styles.text} level={TextLevels.THREE}>
          {content}
        </Text>
      )}

      {(position === IconPosition.UP || stacked) && content && (
        <Text style={styles.text} level={TextLevels.THREE}>
          {content}
        </Text>
      )}

      {icons && (
        <WithLocalSvg
          style={styles.iconText}
          asset={icons[name.toString().replace('tri-picto-', '').replace('tri-', '')]}
          width={size}
          height={size}
          color={color}
        />
      )}

      {position === IconPosition.LEFT && content && (
        <Text style={styles.text} level={TextLevels.THREE}>
          {content}
        </Text>
      )}
    </View>
  )
}

TextIcon.displayName = ComponentName.TextIcon

export default React.forwardRef(TextIcon)
