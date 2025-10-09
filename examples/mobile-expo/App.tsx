import { App as AppTest } from '@trilogy-ds/react-template/App'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <GestureHandlerRootView
      style={{ flex: 1, borderWidth: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
    >
      {<AppTest />}
    </GestureHandlerRootView>
  )
}
