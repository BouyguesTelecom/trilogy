import type { ComponentPropsWithRef, ComponentType } from 'react'
import { Pressable } from 'react-native'
import Animated from 'react-native-reanimated'

type AnimatedPressableProps = Omit<ComponentPropsWithRef<typeof Pressable>, 'style'> & {
	style?: ComponentPropsWithRef<typeof Pressable>['style'] | object
}

export const AnimatedPressable = Animated.createAnimatedComponent(Pressable) as ComponentType<AnimatedPressableProps>
