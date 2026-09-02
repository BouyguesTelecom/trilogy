// Slider.native.tsx
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import {
  SliderRadiusValues,
  SLIDER_RADIUS_PIXELS,
  SliderDefaults,
} from '@/components/slider/SliderEnum'
import { SliderNativeRef, SliderProps } from '@/components/slider/SliderProps'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React from 'react'
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

/**
 * Slider Component (Native)
 * @param children {React.ReactNode} Slides to display
 * @param autoplay {boolean} Automatically advance slides
 * @param autoplayDelay {number} Delay between slides when autoplay is enabled
 * @param loop {boolean} Loop slides when reaching the end
 * @param radius {SliderRadiusValues} Border radius of the viewport
 * @param accessibilityLabel {string} Accessibility label for screen readers
 * @param fullBleed {boolean} Center card with previous/next peeking on the sides
 * @param gap {number | boolean} Space between slides (numeric or truthy flag)
 * @param onSlideChange {(index: number) => void} Callback when active slide changes
 */
const FULLBLEED_PEEK = 32 // how much of prev/next slide is visible

const Slider = React.forwardRef<SliderNativeRef, SliderProps>(
  (
    {
      children,
      autoplay = false,
      autoplayDelay = SliderDefaults.AUTOPLAY_DELAY,
      loop = true,
      radius = SliderRadiusValues.LARGE,
      accessibilityLabel,
      fullBleed = false,
      gap,
      onSlideChange,
    },
    ref,
  ): JSX.Element | null => {
    const slides = React.Children.toArray(children)
    const total = slides.length

    const scrollRef = React.useRef<ScrollView | null>(null)
    const [viewportWidth, setViewportWidth] = React.useState(0)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const indexRef = React.useRef(0)

    const onLayout = (e: LayoutChangeEvent) => {
      setViewportWidth(e.nativeEvent.layout.width)
    }

    const gapPx = React.useMemo(() => {
      if (typeof gap === 'number') return gap
      if (gap) return 16
      return 0
    }, [gap])

    // ---- FULL BLEED LAYOUT CALCULATION ----
    // When fullBleed, we make the slide slightly narrower than the viewport
    // and pad the ScrollView content so the "current" slide is centered,
    // with previous/next peeking on the sides.
    let slideWidth = viewportWidth || 0
    let horizontalPadding = 0

    if (fullBleed && viewportWidth) {
      slideWidth = Math.max(0, viewportWidth - 2 * FULLBLEED_PEEK)
      horizontalPadding = (viewportWidth - slideWidth) / 2
    }

    const snapInterval = slideWidth ? slideWidth + gapPx : 0

    const goTo = React.useCallback(
      (index: number, animated = true) => {
        if (!snapInterval) return
        const clamped = Math.min(Math.max(index, 0), total - 1)

        indexRef.current = clamped
        scrollRef.current?.scrollTo({ x: clamped * snapInterval, animated })
      },
      [snapInterval, total],
    )

    const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (!snapInterval) return
      const idx = Math.round(e.nativeEvent.contentOffset.x / snapInterval)
      indexRef.current = idx
      setActiveIndex(idx)
      onSlideChange?.(idx)
    }

    React.useEffect(() => {
      if (!autoplay || total <= 1 || !snapInterval) return
      const id = setInterval(() => {
        let next = indexRef.current + 1
        if (next >= total) {
          if (!loop) {
            clearInterval(id)
            return
          }
          next = 0
        }
        goTo(next)
      }, autoplayDelay)
      return () => clearInterval(id)
    }, [autoplay, autoplayDelay, total, snapInterval, loop, goTo])

    if (total === 0) return null

    const activeColor = getColorStyle(TrilogyColor.MAIN)
    const inactiveColor = getColorStyle(TrilogyColor.NEUTRAL)
    const borderRadius = SLIDER_RADIUS_PIXELS[radius]

    return (
      <View style={fullBleed?{ marginHorizontal: -24 }:{}}>

      <View
        ref={ref}
        
        style={styles.root}
        onLayout={onLayout}
        accessible
        accessibilityRole="adjustable"
        accessibilityLabel={accessibilityLabel}
      >
        <View
          style={
            borderRadius && !fullBleed
              ? { borderRadius, overflow: 'hidden' }
              : { overflow: 'hidden' }
          }
        >
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled={false}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={onMomentumEnd}
            scrollEventThrottle={16}
            
            snapToInterval={snapInterval || undefined}
            decelerationRate="fast"
            contentContainerStyle={{
              paddingLeft: horizontalPadding,
              paddingRight: horizontalPadding,
            }}
          >
            {slides.map((child, i) => {
              const baseStyle: {
                width: number
                marginRight?: number
              } = {
                width: slideWidth,
                marginRight: i === total - 1 ? 0 : gapPx,
              }

              return (
                <View key={i} style={baseStyle}>
                  {child}
                </View>
              )
            })}
          </ScrollView>
        </View>

        {total > 1 && (
          <View style={styles.controls}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="Previous slide"
              onPress={() => {
                const prev = activeIndex - 1
                if (prev < 0 && !loop) return
                goTo((prev + total) % total)
              }}
            >
              <Icon
                color={TrilogyColor.BACKGROUND}
                circled
                size={IconSize.SMALL}
                name={IconName.ARROW_LEFT}
              />
            </TouchableOpacity>

            <View style={styles.pagination}>
              {slides.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  accessibilityRole="button"
                  accessibilityLabel={`Go to slide ${i + 1}`}
                  onPress={() => goTo(i)}
                  style={[
                    styles.bullet,
                    {
                      width: i === activeIndex ? 24 : 8,
                      backgroundColor: i === activeIndex ? activeColor : inactiveColor,
                    },
                  ]}
                />
              ))}
            </View>

            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="Next slide"
              onPress={() => {
                const next = activeIndex + 1
                if (next >= total && !loop) return
                goTo(next % total)
              }}
            >
              <Icon
                color={TrilogyColor.BACKGROUND}
                circled
                size={IconSize.SMALL}
                name={IconName.ARROW_RIGHT}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  root: { width: '100%',position:"relative" },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    gap: 12,
  },
  pagination: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  bullet: { width: 8, height: 8, borderRadius: 999 },
})

Slider.displayName = ComponentName.Slider
export default Slider
