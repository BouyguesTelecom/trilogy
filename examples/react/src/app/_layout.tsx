import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { Text, useColorScheme } from 'react-native'
import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { THEME_TRILOGY, TrilogyThemeStoreProvider } from '@trilogy-ds/react'
import type { TrilogyTheme } from '@trilogy-ds/react'
import { nativeIcons, nativeIconFonts } from '@/theme/native-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

const theme: TrilogyTheme = { ...THEME_TRILOGY, icons: nativeIcons }

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const { top } = useSafeAreaInsets()
  const [loaded, error] = useFonts(nativeIconFonts)

  useEffect(() => {
    if (loaded || error) void SplashScreen.hideAsync()
  }, [loaded, error])

  if (error) return <Text>Impossible de charger les icônes : {error.message}</Text>
  if (!loaded) return null

  return (
    <TrilogyThemeStoreProvider initialTheme={theme} mode={colorScheme === 'dark' ? 'dark' : 'light'}>
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
