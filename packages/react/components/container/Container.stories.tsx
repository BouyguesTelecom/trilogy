import React from "react"

import { Meta, Story } from "@storybook/react"
import Container from "./Container"
import { Box } from "../box"
import { Text } from "../text"
import { ContainerProps } from "./ContainerProps"
import { Section } from "../section"
import { Divider } from "../divider"
import { Title, TitleLevels } from "../title"
import { StickyPosition } from "../../objects"

export default {
  title: 'Components/Container',
  component: Container,
} as Meta

export const Base: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <Box>
      <Text>Je suis une box dans un container</Text>
    </Box>
  </Container>
)
export const Sticky: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <Box>
      <Text>Container STICKY TOP or STICKY BOTTOM ? ツ</Text>
    </Box>
  </Container>
)

Sticky.args = {
  sticky: StickyPosition.TOP,
}

export const ConteneurFluid: Story<ContainerProps> = (args) => (
  <Section>
   <Divider />
  <Container {...args}>
    <Box>
      <Text>Container content</Text>
    </Box>
  </Container>
  </Section>
)
ConteneurFluid.args = {
  fluid: true,
}

export const ConteneurMedium: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <Box>
      <Text>Container medium</Text>
    </Box>
  </Container>
)
ConteneurMedium.args = {
  medium: true,
}

export const Fullwidth: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <Box>
      <Text>Container Fullwidth</Text>
    </Box>
  </Container>
)
Fullwidth.args = {
  fullwidth: true,
}

export const Centered: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <Box>
      <Text>Container Centered</Text>
    </Box>
  </Container>
)
Centered.args = {
  fluid: true,
  centered: true,
}

export const SurLesCotés: Story<ContainerProps> = (args) => (<>
  <Section>
    <Title level={TitleLevels.THREE}>Conteneur fluid,  pulled-right / left</Title>
    <Divider />
    <Container {...args}>
      <Box>
        <Text>Pulled Right , or left ? ツ </Text>
      </Box>
    </Container>
  </Section>
<Section>
    <Container >
      <Box>
        <Text>Pulled left</Text>
      </Box>
    </Container></Section> </>

)
SurLesCotés.args = {
  fluid: true,
  pulledRight: true
}
