import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@trilogy-ds/react"
import { Text, View } from "react-native"

const Wrapper = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <>
      <Text>{title}</Text>
      {children}
    </>
  )
}

export default function AlertScreen() {
  return (
    <>
      <Wrapper title="Buttons">
        <Alert status="success">
          <AlertContent>
            <AlertTitle>Title</AlertTitle>
            <AlertDescription>Description</AlertDescription>
          </AlertContent>
        </Alert>
      </Wrapper>
    </>
  )
}
