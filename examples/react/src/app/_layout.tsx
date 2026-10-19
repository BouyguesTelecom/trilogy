import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useColorScheme } from 'react-native'
import { THEME_TRILOGY, TrilogyThemeStoreProvider } from '@trilogy-ds/react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const { top } = useSafeAreaInsets()

  return (
    <TrilogyThemeStoreProvider initialTheme={THEME_TRILOGY} mode={colorScheme === 'dark' ? 'dark' : 'light'}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            paddingTop: top,
          },
        }}
      ></Stack>
    </TrilogyThemeStoreProvider>
  )
}
