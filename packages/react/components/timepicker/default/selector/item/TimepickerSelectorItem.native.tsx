import { Text } from '@/components/text'
import { TypographyColor } from '@/lib'
import { TypographyAlign } from '@/objects'
import { TypographyBold } from '@/objects/Typography'
import React, { useMemo } from 'react'
import { ColorValue, StyleSheet, View } from 'react-native'

interface SelectItem {
  label: string
  value: string | number
}

interface WheelItemProps {
  item: SelectItem
  index: number
  scrollOffset: number
  itemHeight: number
  textColor?: ColorValue
  activeTextColor?: ColorValue
}

const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max)

const TimepickerSelectorItem = ({ item, index, scrollOffset, itemHeight }: WheelItemProps) => {
  const position = index * itemHeight
  const distance = Math.abs(scrollOffset - position)

  const computedStyle = useMemo(() => {
    const opacity = clamp(1 - distance / (itemHeight * 2.5), 0.15, 1)
    const scale = clamp(1.1 - (distance / (itemHeight * 2)) * 0.25, 0.85, 1.1)
    const isActive = distance < itemHeight / 2

    return { opacity, scale, isActive }
  }, [distance, itemHeight])

  return (
    <View
      style={[
        styles.itemContainer,
        {
          height: itemHeight,
          opacity: computedStyle.opacity,
          transform: [{ scale: computedStyle.scale }],
        },
      ]}
    >
      <Text typo={computedStyle.isActive ? [TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyAlign.TEXT_CENTERED, TypographyColor.TEXT_WHITE] : [TypographyAlign.TEXT_CENTERED]}>
        {item.label}
      </Text>
    </View>
  )
}

export default TimepickerSelectorItem

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
})
