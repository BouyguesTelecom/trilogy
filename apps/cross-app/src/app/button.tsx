import { Button } from "@trilogy-ds/react"

import { Screen } from "../components/screen"

export default function ButtonScreen() {
  return (
    <Screen>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="conversion">Conversion</Button>
    </Screen>
  )
}
