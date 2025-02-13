import * as React from "react";

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

