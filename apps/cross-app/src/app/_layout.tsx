import { useEffect } from "react"
import { nativeThemeFonts } from "@/theme/native-fonts"
import { nativeIconFonts } from "@/theme/native-icons"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

SplashScreen.preventAutoHideAsync()

export default function TabLayout() {
  const { top } = useSafeAreaInsets()
  const [loaded, error] = useFonts({ ...nativeIconFonts, ...nativeThemeFonts })

  useEffect(() => {
    if (loaded || error) void SplashScreen.hideAsync()
  }, [loaded, error])

  if (error)
    return <Text>Impossible de charger les polices : {error.message}</Text>
  if (!loaded) return null

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingTop: top,
        },
      }}
    ></Stack>
  )
}
