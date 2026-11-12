import { ScrollView as RNScrollView } from "react-native"

export const ScrollView = ({ children }: { children: React.ReactNode }) => {
  return (
    <RNScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
      {children}
    </RNScrollView>
  )
}
