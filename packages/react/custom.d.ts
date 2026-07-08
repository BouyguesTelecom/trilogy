declare module '*.scss' {
  const styles: { [className: string]: string }
  export default styles
}

declare module 'react-native-safe-area-context' {
  import * as React from 'react'
  export interface EdgeInsets {
    top: number
    right: number
    bottom: number
    left: number
  }
  export function useSafeAreaInsets(): EdgeInsets
  export const SafeAreaProvider: React.ComponentType<{ children?: React.ReactNode }>
  export const SafeAreaView: React.ComponentType<{ children?: React.ReactNode; style?: unknown }>
}
