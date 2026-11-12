import { Button, ButtonList } from "@trilogy-ds/react"

import { IconCamera, ScrollView } from "../components"
import { Wrapper } from "../components/wrapper"

export default function ButtonScreen() {
  return (
    <ScrollView>
      <Wrapper title="Buttons">
        <Button variant="primary">
          <IconCamera />
          Primarsfdsfsfskny <IconCamera />
        </Button>
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

      <Wrapper title="Disabled Buttons">
        <ButtonList direction="row">
          <Button variant="primary" disabled>
            Primary
          </Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="ghost" disabled>
            Ghost
          </Button>
          <Button variant="conversion" disabled>
            Conversion
          </Button>
        </ButtonList>
      </Wrapper>
    </ScrollView>
  )
}
