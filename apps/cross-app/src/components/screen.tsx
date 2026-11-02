import { PropsWithChildren } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

interface ScreenProps {
  scrollable?: boolean
}

export const Screen = ({ scrollable = true, children }: PropsWithChildren<ScreenProps>) => {
  if (scrollable) {
    return <ScrollView style={styles.scrollView}>{children}</ScrollView>
  }

  return <View style={styles.view}>{children}</View>
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexGrow: 1,
    padding: 16,
  },
  view: {
    flex: 1,
    padding: 16,
  },
})
