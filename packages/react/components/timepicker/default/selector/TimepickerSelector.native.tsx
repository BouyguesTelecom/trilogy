import React, { useCallback, useMemo, useRef } from 'react'
import { ColorValue, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import TimepickerSelectorItem from './item/TimepickerSelectorItem.native'

interface SelectItem {
  label: string
  value: string | number
}

interface SelectProps {
  items: SelectItem[]
  value: string | number
  onValueChange: (value: string | number) => void
  itemHeight?: number
  visibleItems?: number
  textColor?: ColorValue
  activeTextColor?: ColorValue
}

export const TimepickerSelector = ({
  items,
  value,
  onValueChange,
  itemHeight = 45,
  visibleItems = 5,
  textColor,
  activeTextColor,
}: SelectProps) => {
  const scrollY = useSharedValue(0)
  const containerHeight = itemHeight * visibleItems
  const listRef = useRef<Animated.FlatList<SelectItem>>(null)
  const selectedIndex = useMemo(() => items.findIndex((item) => item.value === value), [items, value])
  const horizontalPadding = (containerHeight - itemHeight) / 2

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y
    },
  })

  const onScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const index = Math.round(event.nativeEvent.contentOffset.y / itemHeight)
      if (items[index] && items[index].value !== value) {
        onValueChange(items[index].value)
      }
    },
    [items, itemHeight, onValueChange, value],
  )

  const renderItem = ({ item, index }: { item: SelectItem; index: number }) => {
    return (
      <TimepickerSelectorItem
        item={item}
        index={index}
        scrollY={scrollY}
        itemHeight={itemHeight}
        textColor={textColor}
        activeTextColor={activeTextColor}
      />
    )
  }

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <View
        style={[
          styles.indicator,
          {
            height: itemHeight,
            top: horizontalPadding,
            backgroundColor: 'red',
          },
        ]}
      />

      <Animated.FlatList
        ref={listRef}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.value)}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        decelerationRate='fast'
        onScroll={scrollHandler}
        onMomentumScrollEnd={onScrollEnd}
        contentContainerStyle={{
          paddingVertical: horizontalPadding,
        }}
        scrollEventThrottle={16}
        getItemLayout={(_, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
        initialScrollIndex={selectedIndex >= 0 ? selectedIndex : 0}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  indicator: {
    position: 'absolute',
    left: 16,
    right: 16,
    zIndex: -1,
    borderRadius: 10,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1,
  },
})
