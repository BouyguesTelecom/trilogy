import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@trilogy-ds/react"
import { Text, View } from "react-native"

import { Screen } from "../components/screen"

const Wrapper = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <View>
      <Text>{title}</Text>
      {children}
    </View>
  )
}

export default function AlertScreen() {
  return (
    <Screen>
      <Wrapper title="Buttons">
        <Alert status="success">
          <AlertContent>
            <AlertTitle>Title</AlertTitle>
            <AlertDescription>Description</AlertDescription>
          </AlertContent>
        </Alert>
      </Wrapper>
    </Screen>
  )
}
