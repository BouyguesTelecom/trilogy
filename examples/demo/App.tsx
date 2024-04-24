import { Router } from '@trilogy-ds/react-template/router'
import { useFonts } from 'expo-font';
import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    'poppins-bold': require('./assets/fonts/ttf/poppins-bold.ttf'),
    'poppins-medium': require('./assets/fonts/ttf/poppins-medium.ttf'),
    'poppins-regular': require('./assets/fonts/ttf/poppins-regular.ttf'),
    'poppins-semibold': require('./assets/fonts/ttf/poppins-semibold.ttf')
  });

  return (
    <View style={{ flex: 1 }}>
      {fontsLoaded && (
        <Router />
      )}
    </View>
  );
}
