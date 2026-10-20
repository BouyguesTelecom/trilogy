import { forwardRef, useContext, useMemo } from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import type { ViewStyle } from 'react-native'
import { ComponentName } from '@/components/enumsComponentsName'
import { IconSize } from '@/components/icon/IconEnum'
import type { IconNativeRef, IconProps } from '@/components/icon/IconProps'
import { Skeleton } from '@/components/skeleton'
import { StatesContext } from '@/context/providerStates'
import { getAlignStyle } from '@/objects/facets/Alignable'
import { useThemeSelector } from '@/hooks/useThemeSelector'
import { useIconColor } from '@/hooks/useIconColor'
import { useBackgroundColor } from '@/hooks/useBackgroundColor'

const sizes = {
  smaller: { icon: 16, circle: 38, skeleton: 10 },
  small: { icon: 20, circle: 32, skeleton: 15 },
  medium: { icon: 30, circle: 48, skeleton: 25 },
  large: { icon: 44, circle: 66, skeleton: 35 },
  huge: { icon: 66, circle: 99, skeleton: 50 },
}

/** Renders an already-loaded font. Font loading is the application's responsibility. */
const Icon = forwardRef<IconNativeRef, IconProps>(
  (
    {
      name,
      size = IconSize.SMALL,
      color,
      backgroundColor,
      circled,
      stretched,
      skeleton,
      align,
      onClick,
      testId,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { inverted } = useContext(StatesContext)
    const fontFamily = useThemeSelector((theme) => {
      const family = theme.icons?.fontFamily
      if (typeof family === 'string') return family
      if (Platform.OS === 'android') return family?.android
      if (Platform.OS === 'ios') return family?.ios
      return family?.default
    })
    const glyph = useThemeSelector((theme) => {
      const map = theme.icons?.glyphMap
      if (!map) return undefined
      const key = name.replace(/^tri-(?:picto-)?/, '')
      const value = Object.prototype.hasOwnProperty.call(map, name)
        ? map[name]
        : Object.prototype.hasOwnProperty.call(map, key)
        ? map[key]
        : undefined
      if (typeof value === 'string') return value
      if (typeof value === 'number' && Number.isInteger(value) && value >= 0 && value <= 0x10ffff) {
        return String.fromCodePoint(value)
      }
      return undefined
    })
    const resolvedColor = useIconColor(
      color === 'transparent' ? 'primary' : color ?? (inverted ? 'inverse' : 'primary'),
    )
    const inverseColor = useIconColor('inverse')
    const background = useBackgroundColor(backgroundColor ?? 'secondary')
    const skeletonBackground = useBackgroundColor('primary-subtle')
    const iconColor = color === 'transparent' ? 'transparent' : resolvedColor
    const dimensions = sizes[size]
    const dynamicStyles = useMemo(
      () => ({
        root: { alignSelf: getAlignStyle(align) as ViewStyle['alignSelf'] },
        container: { width: dimensions.icon, height: dimensions.icon },
        circle: {
          width: dimensions.circle,
          height: dimensions.circle,
          borderRadius: dimensions.circle,
          backgroundColor: background,
        },
        stretched: { width: dimensions.circle + 15, height: dimensions.circle, backgroundColor: iconColor },
        glyph: { fontFamily, fontSize: dimensions.icon, color: stretched && !circled ? inverseColor : iconColor },
        skeleton: { backgroundColor: skeletonBackground },
      }),
      [align, dimensions, fontFamily, background, iconColor, inverseColor, stretched, circled, skeletonBackground],
    )

    if (skeleton) {
      return (
        <Skeleton
          style={dynamicStyles.skeleton}
          width={dimensions.circle}
          height={dimensions.circle}
          borderRadius={dimensions.skeleton}
          testID='skeleton-id'
        />
      )
    }

    // No SVG fallback and no replacement character from a system font.
    const iconView =
      fontFamily && glyph !== undefined ? (
        <View
          {...others}
          testID={stretched && !circled ? `${testId}-stretched` : circled ? `${testId}-circled` : undefined}
          style={[
            styles.center,
            stretched && !circled
              ? [styles.stretched, dynamicStyles.stretched]
              : circled
              ? dynamicStyles.circle
              : dynamicStyles.container,
          ]}
        >
          <Text
            accessible={false}
            allowFontScaling={false}
            selectable={false}
            style={[styles.glyph, dynamicStyles.glyph, stretched && Platform.OS === 'ios' && styles.counterSkew]}
          >
            {glyph}
          </Text>
        </View>
      ) : null

    return (
      <View style={dynamicStyles.root} testID={testId} ref={ref}>
        {onClick ? (
          <TouchableOpacity
            style={styles.pressable}
            onPress={onClick}
            activeOpacity={0.85}
            testID={`${testId}-pressable`}
          >
            {iconView}
          </TouchableOpacity>
        ) : (
          iconView
        )}
      </View>
    )
  },
)

Icon.displayName = ComponentName.Icon
export default Icon

const styles = StyleSheet.create({
  center: { alignItems: 'center', justifyContent: 'center' },
  glyph: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    includeFontPadding: false,
    textAlign: 'center',
  },
  pressable: { width: '100%' },
  stretched: { borderTopRightRadius: 10, transform: Platform.OS === 'ios' ? [{ skewX: '-20deg' }] : [] },
  counterSkew: { transform: [{ skewX: '20deg' }] },
})
