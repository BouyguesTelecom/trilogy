import { Router } from '@trilogy-ds/react-template/router'
import { useFonts } from 'expo-font'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  const [fontsLoaded] = useFonts({
    'poppins-bold': require('@trilogy-ds/assets/lib/fonts/ttf/poppins-bold.ttf'),
    'poppins-medium': require('@trilogy-ds/assets/lib/fonts/ttf/poppins-medium.ttf'),
    'poppins-regular': require('@trilogy-ds/assets/lib/fonts/ttf/poppins-regular.ttf'),
    'poppins-semibold': require('@trilogy-ds/assets/lib/fonts/ttf/poppins-semibold.ttf'),
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>{fontsLoaded && <Router />}</GestureHandlerRootView>
  )
}
