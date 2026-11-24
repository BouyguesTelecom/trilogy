import type { CSSProperties } from "react"
import type { StyleProp, TextStyle, ViewStyle } from "react-native"

export interface CommonProps {
  /** Sets the component's element identifier. */
  id?: string
  /** Adds CSS classes on Web. Not applied by Native components. */
  className?: string
  /** Sets the testing identifier. */
  testId?: string
  /** Applies inline CSS on Web or a React Native view/text style on Native. */
  style?: CSSProperties | StyleProp<ViewStyle | TextStyle>
}
