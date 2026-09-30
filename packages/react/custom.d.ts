import { ComponentType, ReactNode } from 'react'
declare module '*.scss' {
  const styles: { [className: string]: string }
  export default styles
}

declare module 'react-native-safe-area-context' {
  export interface EdgeInsets {
    top: number
    right: number
    bottom: number
    left: number
  }
  export function useSafeAreaInsets(): EdgeInsets
  export const SafeAreaProvider: ComponentType<{ children?: ReactNode }>
  export const SafeAreaView: ComponentType<{ children?: ReactNode; style?: unknown }>
}
