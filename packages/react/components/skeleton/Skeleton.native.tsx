import React, { useEffect, useRef } from 'react'
import { View, ViewStyle, DimensionValue, Animated } from 'react-native'

export interface SkeletonProps {
  style?: ViewStyle
  width?: DimensionValue
  height?: DimensionValue
  backgroundColor?: string
  shimmerColor?: string
  duration?: number
  borderRadius?: number
  children?: React.ReactNode
  testID?: string
}

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
    width: children ? undefined : width, // Si children, s'adapte au contenu
    height,
    backgroundColor,
    borderRadius,
    overflow: 'hidden',
    alignSelf: children ? 'flex-start' : undefined, // Évite l'étirement
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
