import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { SliderDefaults } from '@/components/slider/SliderEnum'
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
 * Slider (carousel) Component (native)
 *
 * Uses a paged horizontal ScrollView. Supports autoplay, loop and pagination
 * bullets. Native uses single-page paging, so `slidesPerView`, `spaceBetween`
 * and named `breakpoints` are accepted for API parity but not applied.
 *
 * @param children {ReactNode} Slider items (`<SliderItem>`)
 * @param autoplay {boolean} Auto-advance slides
 * @param autoplayDelay {number} Delay between transitions (ms)
 * @param loop {boolean} Loop back to the start after the last slide
 * @param onSlideChange {(index:number)=>void} Fired when the active slide changes
 */
const Slider = React.forwardRef<SliderNativeRef, SliderProps>(
  (
    {
      children,
      autoplay = false,
      autoplayDelay = SliderDefaults.AUTOPLAY_DELAY,
      loop = true,
      rounded = true,
      accessibilityLabel = 'Content slider',
      onSlideChange,
    },
    ref,
  ): JSX.Element | null => {
    const slides = React.Children.toArray(children)
    const total = slides.length

    const scrollRef = React.useRef<ScrollView | null>(null)
    const [width, setWidth] = React.useState(0)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const indexRef = React.useRef(0)

    const onLayout = (e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width)

    const goTo = React.useCallback(
      (index: number, animated = true) => {
        if (!width) return
        const clamped = Math.min(Math.max(index, 0), total - 1)
        scrollRef.current?.scrollTo({ x: clamped * width, animated })
      },
      [width, total],
    )

    const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (!width) return
      const idx = Math.round(e.nativeEvent.contentOffset.x / width)
      indexRef.current = idx
      setActiveIndex(idx)
      onSlideChange?.(idx)
    }

    React.useEffect(() => {
      if (!autoplay || total <= 1 || !width) return
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
    }, [autoplay, autoplayDelay, total, width, loop, goTo])

    if (total === 0) return null

    const activeColor = getColorStyle(TrilogyColor.MAIN)
    const inactiveColor = getColorStyle(TrilogyColor.NEUTRAL)

    return (
      <View
        ref={ref}
        style={styles.root}
        onLayout={onLayout}
        accessible
        accessibilityRole='adjustable'
        accessibilityLabel={accessibilityLabel}
      >
        <View style={rounded ? styles.viewportRounded : undefined}>
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={onMomentumEnd}
            scrollEventThrottle={16}
          >
            {slides.map((child, i) => (
              <View key={i} style={{ width }}>
                {child}
              </View>
            ))}
          </ScrollView>
        </View>

        {total > 1 && (
          <View style={styles.controls}>
            <TouchableOpacity
              accessibilityRole='button'
              accessibilityLabel='Previous slide'
              onPress={() => {
                const prev = activeIndex - 1
                if (prev < 0 && !loop) return
                goTo((prev + total) % total)
              }}
            >
              <Icon circled size={IconSize.SMALL} name={IconName.ARROW_LEFT} />
            </TouchableOpacity>

            <View style={styles.pagination}>
              {slides.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  accessibilityRole='button'
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
              accessibilityRole='button'
              accessibilityLabel='Next slide'
              onPress={() => {
                const next = activeIndex + 1
                if (next >= total && !loop) return
                goTo(next % total)
              }}
            >
              <Icon circled size={IconSize.SMALL} name={IconName.ARROW_RIGHT} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  },
)

const styles = StyleSheet.create({
  root: { width: '100%' },
  viewportRounded: { borderRadius: 24, overflow: 'hidden' },
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
