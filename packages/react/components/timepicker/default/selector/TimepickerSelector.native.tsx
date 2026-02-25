import { ModalContext } from '@/components/modal/context/ModalContext'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View } from 'react-native'
import TimepickerSelectorItem from './item/TimepickerSelectorItem.native'

interface SelectItem {
  label: string
  value: string | number
}

interface SelectProps {
  items: SelectItem[]
  value: string | number
  onValueChange: (value: string | number) => void
  visibleItems?: number
}

const itemHeight = 36

export const TimepickerSelector = ({ items, value, onValueChange, visibleItems = 5 }: SelectProps) => {
  const [scrollOffset, setScrollOffset] = useState(0)
  const containerHeight = itemHeight * visibleItems
  const localScrollRef = useRef<ScrollView>(null)
  const { scrollViewRef, handleOnScroll: modalOnScroll } = useContext(ModalContext)
  const selectedIndex = useMemo(() => items.findIndex((item) => item.value === value), [items, value])
  const verticalPadding = (containerHeight - itemHeight) / 2

  useEffect(() => {
    if (localScrollRef.current && scrollViewRef) {
      (scrollViewRef as React.MutableRefObject<ScrollView | null>).current = localScrollRef.current
    }
  }, [scrollViewRef])

  useEffect(() => {
    if (localScrollRef.current && selectedIndex >= 0) {
      const targetOffset = selectedIndex * itemHeight
      setScrollOffset(targetOffset)
      setTimeout(() => {
        localScrollRef.current?.scrollTo({ y: targetOffset, animated: false })
      }, 50)
    }
  }, [selectedIndex, itemHeight])

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      setScrollOffset(event.nativeEvent.contentOffset.y)
      modalOnScroll?.(event)
    },
    [modalOnScroll],
  )

  const onScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetY = event.nativeEvent.contentOffset.y
      const index = Math.round(offsetY / itemHeight)
      setScrollOffset(offsetY)
      if (items[index] && items[index].value !== value) {
        onValueChange(items[index].value)
      }
    },
    [items, itemHeight, onValueChange, value],
  )

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <View
        style={[
          styles.indicator,
          {
            height: itemHeight,
            top: verticalPadding,
            backgroundColor: getColorStyle(TrilogyColor.MAIN),
          },
        ]}
      />

      <ScrollView
        ref={localScrollRef}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        decelerationRate='fast'
        onScroll={onScroll}
        onMomentumScrollEnd={onScrollEnd}
        contentContainerStyle={{
          paddingVertical: verticalPadding,
        }}
        scrollEventThrottle={16}
        nestedScrollEnabled
      >
        {items.map((item, index) => (
          <TimepickerSelectorItem key={String(item.value)} item={item} index={index} scrollOffset={scrollOffset} />
        ))}
      </ScrollView>
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
    left: 0,
    right: 0,
    zIndex: -1,
    borderRadius: 8,
  },
})
