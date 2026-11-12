import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
} from "react"
import {
  Pressable as RNPressable,
  type GestureResponderEvent,
  type PressableProps as RNPressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native"

export type PressableRef = ComponentRef<typeof RNPressable>

type PressableStyle =
  StyleProp<ViewStyle> | ((state: { pressed: boolean }) => StyleProp<ViewStyle>)

export type PressableProps = Omit<RNPressableProps, "style" | "children"> & {
  style?: PressableStyle
  children?: ReactNode
  /** Durée (ms) pendant laquelle `pressed` reste vrai après un appui confirmé. */
  pressedDuration?: number
}

/**
 * Remplace le `Pressable` de React Native : `pressed` passe à vrai sur `onPress` (appui confirmé)
 * et non dès le toucher, donc commencer un scroll sur l'élément ne déclenche pas le style pressed.
 */
export const Pressable: ForwardRefExoticComponent<
  PressableProps & RefAttributes<PressableRef>
> = forwardRef<PressableRef, PressableProps>(
  ({ style, onPress, pressedDuration = 100, ...rest }, ref) => {
    const [pressed, setPressed] = useState(false)
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

    useEffect(() => () => clearTimeout(timer.current), [])

    const handlePress = (event: GestureResponderEvent) => {
      clearTimeout(timer.current)
      setPressed(true)
      timer.current = setTimeout(() => setPressed(false), pressedDuration)
      onPress?.(event)
    }

    return (
      <RNPressable
        {...rest}
        ref={ref}
        onPress={handlePress}
        style={typeof style === "function" ? style({ pressed }) : style}
      />
    )
  }
)

Pressable.displayName = "Pressable"
