import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@trilogy-ds/react"

import { Wrapper } from "../components/wrapper"

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
