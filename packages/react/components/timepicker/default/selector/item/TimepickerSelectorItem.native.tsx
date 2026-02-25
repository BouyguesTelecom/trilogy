import { Text } from '@/components/text'
import React from 'react'
import { ColorValue, StyleSheet } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

interface SelectItem {
  label: string
  value: string | number
}

interface WheelItemProps {
  item: SelectItem
  index: number
  scrollY: any
  itemHeight: number
  textColor?: ColorValue
  activeTextColor?: ColorValue
}

const TimepickerSelectorItem = ({ item, index, scrollY, itemHeight }: WheelItemProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const position = index * itemHeight
    const distance = scrollY.value - position
    const absDistance = Math.abs(distance)
    const opacity = interpolate(absDistance, [0, itemHeight, itemHeight * 2], [1, 0.5, 0.2], 'clamp')
    const scale = interpolate(absDistance, [0, itemHeight, itemHeight * 2], [1.1, 0.95, 0.85], 'clamp')
    const rotateX = interpolate(distance, [-itemHeight * 2, 0, itemHeight * 2], [45, 0, -45], 'clamp')

    return {
      opacity,
      transform: [{ perspective: 400 }, { scale }, { rotateX: `${rotateX}deg` }],
    }
  })

  return (
    <Animated.View style={[styles.itemContainer, { height: itemHeight }, animatedStyle]}>
      <Text>{item.label}</Text>
    </Animated.View>
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
