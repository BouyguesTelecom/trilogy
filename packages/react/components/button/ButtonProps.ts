import type { TouchableOpacity } from 'react-native'

export interface ButtonProps {
  children?: React.ReactNode
  onPress?: () => void
}

export type ButtonRef = HTMLButtonElement
export type ButtonNativeRef = TouchableOpacity
