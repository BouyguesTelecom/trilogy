import React, { useEffect, useRef } from 'react'
import { View, ViewStyle, Animated } from 'react-native'
import { SkeletonProps } from './SkeletonProps'

/**
 * Skeleton component to display a loading placeholder with shimmer effect.
 * @param style - Custom styles for the skeleton container.
 * @param width - Width of the skeleton. Default is '100%'.
 * @param height - Height of the skeleton. Default is 20.
 * @param backgroundColor - Background color of the skeleton.
 * @param shimmerColor - Color of the shimmer effect.
 * @param duration - Duration of the shimmer animation in milliseconds. Default is 1200.
 * @param borderRadius - Border radius of the skeleton. Default is 4.
 * @param children - Optional children to render inside the skeleton.
 * @param testID - Test identifier for testing purposes.
 */
const Skeleton: React.FC<SkeletonProps> = ({
  style,
  width = '100%',
  height = 20,
  backgroundColor = '#E1E9EE',
  shimmerColor = '#F7F8F8',
  duration = 1200,
  borderRadius = 4,
  children,
  testID,
}) => {
  const shimmerValue = useRef(new Animated.Value(0)).current
  const [containerWidth, setContainerWidth] = React.useState(200)

  useEffect(() => {
    const shimmerAnimation = Animated.loop(
      Animated.timing(shimmerValue, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      { iterations: -1 }
    )

    shimmerAnimation.start()

    return () => shimmerAnimation.stop()
  }, [shimmerValue, duration])

  const translateX = shimmerValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-containerWidth, containerWidth],
  })

  const opacity = shimmerValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 0.8, 0.3],
  })

  const containerStyle: ViewStyle = {
    width: children ? undefined : width,
    height: children ? undefined : height,
    backgroundColor,
    borderRadius,
    overflow: 'hidden',
    alignSelf: children ? 'flex-start' : undefined,
    ...style,
  }

  const handleLayout = (event: any) => {
    const { width: layoutWidth } = event.nativeEvent.layout
    setContainerWidth(layoutWidth)
  }

  if (children) {
    return (
      <View style={containerStyle} testID={testID} onLayout={handleLayout}>
        <View style={{ opacity: 0 }}>
          {children}
        </View>

        <Animated.View
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              width: containerWidth * 0.7,
              height: '100%',
              backgroundColor: shimmerColor,
              opacity,
              transform: [{ translateX }],
            },
          ]}
        />
      </View>
    )
  }

  return (
    <View style={containerStyle} testID={testID} onLayout={handleLayout}>
      <Animated.View
        style={[
          {
            width: containerWidth * 0.7,
            height: '100%',
            backgroundColor: shimmerColor,
            opacity,
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  )
}

export default Skeleton
