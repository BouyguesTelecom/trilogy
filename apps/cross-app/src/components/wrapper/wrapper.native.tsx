import { Text, View } from "react-native"

export const Wrapper = ({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) => {
  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        gap: 16,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
      }}
    >
      {title && (
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>{title}</Text>
      )}
      {children}
    </View>
  )
}
