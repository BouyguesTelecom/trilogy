import '@trilogy-ds/styles/dist/default/trilogy.css'
import { Stack } from 'expo-router'
import 'react-native-reanimated'

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </>
  )
}
