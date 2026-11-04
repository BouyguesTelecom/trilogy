import { Button, ButtonList } from "@trilogy-ds/react"
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
    <View style={{ borderWidth: 1, borderColor: "black" }}>
      <Text>{title}</Text>
      {children}
    </View>
  )
}

export default function ButtonScreen() {
  return (
    <Screen>
      <Wrapper title="Buttons">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="conversion">Conversion</Button>
      </Wrapper>

      <Wrapper title="Button List">
        <ButtonList>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="conversion">Conversion</Button>
        </ButtonList>
      </Wrapper>

      <Wrapper title="Buttons List Row">
        <ButtonList direction="row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="conversion">Conversion</Button>
        </ButtonList>
      </Wrapper>
    </Screen>
  )
}
