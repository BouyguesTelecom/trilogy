import React from "react"

import { Meta, Story } from "@storybook/react"
import ColumnsItem from "./item"
import Columns from "./Columns"
import { ColumnsProps } from "./ColumnsProps"
import Box from "../box/Box"
import { Title, TitleLevels } from "../title"

export default {
  title: 'Components/Columns',
  component: Columns,
  subcomponents: { ColumnsItem },
} as Meta

export const Base: Story<ColumnsProps> = (args) => (
  <Columns {...args}>
    <ColumnsItem >
      <Box flat>
        <Title level={TitleLevels.TWO}>Column</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem >
      <Box flat>
        <Title level={TitleLevels.TWO}>Column</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem >
      <Box flat>
        <Title level={TitleLevels.TWO}>Column</Title>
      </Box>
    </ColumnsItem>

  </Columns>
)

export const TailleDesColonnes: Story<ColumnsProps> = (args) => (
  <Columns {...args} multiline >
    <ColumnsItem size={1}>
      <Box>
        <Title level={TitleLevels.TWO}>Column is-1</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={2}>
      <Box>
        <Title level={TitleLevels.TWO}>Column is-2</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={3}>
      <Box>
        <Title level={TitleLevels.TWO}>Column is-3</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={4}>
      <Box>
        <Title level={TitleLevels.TWO}>Column is-4</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={5}>
      <Box>
        <Title level={TitleLevels.TWO}>Column is-5</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={6}>
      <Box>
        <Title level={TitleLevels.TWO}>Column is-6</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={7}>
      <Box>
        <Title level={TitleLevels.TWO}>Column is-7</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={8}>
      <Box>
        <Title level={TitleLevels.TWO}>Column is-8</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={9}>
      <Box>
        <Title level={TitleLevels.TWO}>Column is-9</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={10}>
      <Box>
        <Title level={TitleLevels.TWO}>Column is-10</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={11}>
      <Box>
        <Title level={TitleLevels.TWO}>Column is-11</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={12}>
      <Box>
        <Title level={TitleLevels.TWO}>Column is-12</Title>
      </Box>
    </ColumnsItem>
  </Columns>
)

export const InlinedScrollVertical: Story<ColumnsProps> = (args) => (
  <Columns {...args}>
    <ColumnsItem size={1}>
      <Box>
        <Title level={TitleLevels.TWO}>1 Column</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={4}>
      <Box>
        <Title level={TitleLevels.TWO}>4 Columns</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={4}>
      <Box>
        <Title level={TitleLevels.TWO}>4 Columns</Title>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={7}>
      <Box>
        <Title level={TitleLevels.TWO}>7 Columns</Title>
      </Box>
    </ColumnsItem>
  </Columns>
)
InlinedScrollVertical.args = {
  scrollable: true,
}
