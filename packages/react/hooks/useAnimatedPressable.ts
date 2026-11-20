import { cancelAnimation, Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

export const useAnimatedPressable = () => {
  const opacity = useSharedValue(1)
  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }))

  const handleAnimate = () => {
    cancelAnimation(opacity)
    opacity.value = 0.7
    opacity.value = withTiming(1, {
      duration: 180,
      easing: Easing.bezier(0, 0, 0.34, 1),
    })
  }

  return { animatedStyle, handleAnimate }
}
