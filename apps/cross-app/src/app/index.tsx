import { Pressable, StyleSheet, Text, View } from "react-native"

import { Screen } from "../components/screen"
import { SCREEN_ROUTES } from "../data/screenRoutes"
import { useRouter } from "../libs/router"

export default function HomeScreen() {
  const router = useRouter()

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Trilogy Explorer</Text>
        {SCREEN_ROUTES.map((screen) => (
          <Pressable
            key={screen}
            style={styles.button}
            onPress={() => router.push(screen)}
          >
            <Text style={styles.buttonText}>{screen}</Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  button: {
    padding: 12,
    backgroundColor: "#009cbe",
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    textTransform: "capitalize",
  },
})
