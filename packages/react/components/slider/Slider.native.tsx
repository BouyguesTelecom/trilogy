/* eslint-disable indent */
import React, {useRef, useState} from 'react'
import {Dimensions, Platform, ScrollView, StyleSheet, Text, View} from 'react-native'
import {SliderProps} from './SliderProps'
import {getColorStyle, TrilogyColor} from '../../objects/facets/Color'
import {Spacer, SpacerSize} from '../spacer'
import {ComponentName} from '../enumsComponentsName'

const {width} = Dimensions.get('screen')

// const height = (width.width * 100) / 60 // 60%

/**
 * Slider component
 * @param children {ReactNode} Slider child
 * @param doted {boolean} slide dot
 * @param showNextSlide {boolean} show next slide
 * @param contentSize {number} size of slide
 * @param testId
 * @param accessibilityLabel
 * @param progressBar
 * @param bars
 * @param others
 */
const Slider = ({
                  children,
                  doted,
                  showNextSlide,
                  contentSize,
                  testId,
                  accessibilityLabel,
                  progressBar,
                  bars,
                  ...others
                }: SliderProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const contentWidth = contentSize ? contentSize : showNextSlide ? width * 0.85 : width
  const showNextSlideValue = showNextSlide ? 4 : 0

  const styles = StyleSheet.create({
    content: {
      width: contentWidth,
      resizeMode: 'cover',
      padding: showNextSlideValue,
      height: '100%',
    },
    dots: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: doted ? -24 : -12,
      alignSelf: 'center',
      fontSize: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 50,
    },
    textDots: {
      color: '#C2C2C2',
      fontSize: 30,
    },
    activeTextDot: {
      color: getColorStyle(TrilogyColor.TERTIARY),
      fontSize: 30,
    },
    progressBar: {
      backgroundColor: '#C2C2C2',
      fontSize: 30,
      width: `${90 / React.Children.count(children)}%`,
      height: 6,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#C2C2C2',
      overflow: 'hidden',
    },
    activeProgressBar: {
      backgroundColor: getColorStyle(TrilogyColor.TERTIARY),
      fontSize: 30,
      width: `${100 / React.Children.count(children)}%`,
      height: 6,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: getColorStyle(TrilogyColor.TERTIARY),
      overflow: 'hidden',
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeHandler = ({nativeEvent}: any) => {
    if (nativeEvent.layoutMeasurement.width === 0) return
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    if (slide !== activeItem) {
      setActiveItem(slide)
    }
  }
  const scrollViewRef = useRef<ScrollView | null>(null)

  const SPACING_FOR_CARD_INSET = showNextSlide ? 24 : 0

  const getStyles = (
    dot: boolean | undefined,
    progressBar: boolean | undefined,
    bar: boolean | undefined,
    index: number,
  ) => {
    if (dot) {
      if (index === activeItem) return styles.activeTextDot
      return styles.textDots
    }
    if (bar || progressBar) {
      if (index === activeItem) return {...styles.activeProgressBar, marginRight: 8}
      return {...styles.progressBar, marginRight: 8}
    }
  }

  return (
    <View
      style={{height: height}}
      {...others}
      testID={testId}
      accessibilityLabel={accessibilityLabel}
      accessible={!!accessibilityLabel}
    >
      <ScrollView
        style={{position: 'absolute', alignSelf: 'center', width: width}}
        onScroll={changeHandler}
        snapToInterval={contentWidth}
        pagingEnabled
        decelerationRate={0}
        scrollEventThrottle={0}
        showsHorizontalScrollIndicator={false}
        snapToAlignment='center'
        onLayout={(e) => {
          scrollViewRef?.current?.scrollTo({x: -SPACING_FOR_CARD_INSET, animated: false})
          setHeight(e.nativeEvent.layout.height)
        }}
        ref={scrollViewRef}
        contentInset={{
          // iOS ONLY
          top: 0,
          left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
          bottom: 0,
          right: SPACING_FOR_CARD_INSET, // Right spacing for the very last card
        }}
        contentContainerStyle={{
          // contentInset alternative for Android
          paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0, // Horizontal spacing before and after the ScrollView
        }}
        horizontal
      >
        {children
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              style: [styles.content, child.props.style],
            }),
          )
          : children}
      </ScrollView>
      {(progressBar || doted || bars) && (
        <View style={styles.dots}>
          {children
            ? React.Children.map(children, (_child: React.ReactNode, index: number) => (
              <Text key={index} style={getStyles(doted, progressBar, bars, index)}>
                {doted && '•'}
              </Text>
            ))
            : children}
          <Spacer size={SpacerSize.HUGE}/>
        </View>
      )}
    </View>
  )
}

Slider.displayName = ComponentName.Slider

export default Slider
