import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { WithLocalSvg } from 'react-native-svg/css'

import { ComponentName } from '@/components/enumsComponentsName'
import { CircleIconProps } from '@/components/icon/circle/CircleIconProps'
import { IconPosition } from '@/components/icon/IconEnum'
import { Text, TextLevels } from '@/components/text'
import { TrilogyThemeContext } from '@/context/providerTheme.native'
import { TrilogyColor, TrilogyColorValues, getColorStyle } from '@/objects/facets/Color'

const CircleIcon = React.forwardRef(
  (
    { name, size, color, backgroundColor, content, circledWidth, position, stacked, testId }: CircleIconProps,
    ref: React.Ref<View>,
  ): JSX.Element => {
    const {
      theme: { icons },
    } = useContext(TrilogyThemeContext)

    const styles = StyleSheet.create({
      circled: {
        width: circledWidth,
        height: circledWidth,
        backgroundColor: backgroundColor
          ? getColorStyle(backgroundColor as TrilogyColor | TrilogyColorValues)
          : 'transparent',
        borderRadius: circledWidth,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        shadowColor: 'rgba(0,0,0,.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      iconCircled: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      contentContainer: {
        alignItems: 'center',
        flexDirection:
          (position === IconPosition.DOWN && 'column') || (position === IconPosition.UP && 'column-reverse') || 'row',
      },
      text: {
        maxWidth: circledWidth + 32,
        textAlign: 'center',
        color: color || getColorStyle(TrilogyColor.BACKGROUND),
      },
      spaceTextCircledV: {
        marginTop: 3,
      },
      spaceTextCircledH: {
        marginRight: 5,
      },
    })

    return (
      <View style={styles.contentContainer} testID={testId} ref={ref}>
        {!position && content && (
          <View>
            <Text style={styles.text} level={TextLevels.TWO}>
              {content}
            </Text>
            <View style={styles.spaceTextCircledV} />
          </View>
        )}

        {position === IconPosition.DOWN && content && (
          <>
            <Text style={styles.text} level={TextLevels.TWO}>
              {content}
            </Text>
            <View style={styles.spaceTextCircledV} />
          </>
        )}

        {position === IconPosition.RIGHT && content && (
          <>
            <Text style={styles.text} level={TextLevels.TWO}>
              {content}
            </Text>
            <View style={styles.spaceTextCircledH} />
          </>
        )}

        {(position === IconPosition.UP || stacked) && content && (
          <>
            <Text style={styles.text} level={TextLevels.TWO}>
              {content}
            </Text>
            <View style={styles.spaceTextCircledV} />
          </>
        )}

        <View style={styles.circled}>
          {icons && (
            <WithLocalSvg
              style={styles.iconCircled}
              asset={icons[name.toString().replace('tri-picto-', '').replace('tri-', '')]}
              width={size}
              height={size}
              color={color || getColorStyle(TrilogyColor.BACKGROUND)}
            />
          )}
        </View>

        {position === IconPosition.LEFT && content && (
          <>
            <View style={styles.spaceTextCircledH} />
            <Text style={styles.text} level={TextLevels.TWO}>
              {content}
            </Text>
          </>
        )}
      </View>
    )
  },
)

CircleIcon.displayName = ComponentName.CircleIcon
export default CircleIcon
