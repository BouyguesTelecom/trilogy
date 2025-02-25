import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns } from './index'
import { ColumnsProps } from './ColumnsProps'
import { Box } from '../box'
import { Title, TitleLevels } from '../title'
import { Alignable } from '../../objects'

const meta = {
  title: 'Components/Columns',
  component: Columns,
  subcomponents: { Column },
  argTypes: {
    align: {
      options: Object.values(Alignable),
      mapping: Object.assign({}, Alignable),
      table: {
        type: { summary: 'Alignable' },
      },
    },
    verticalAlign: {
      control: 'select',
      options: Object.values(Alignable),
      mapping: Object.assign({}, Alignable),
      table: {
        type: { summary: 'Alignable' },
      },
    },
  }
} satisfies Meta<ColumnsProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: (args: ColumnsProps) => (
    <Columns {...args}>
      <Column>
        <Box flat>
          <Title level={TitleLevels.TWO}>Column</Title>
        </Box>
      </Column>
      <Column>
        <Box flat>
          <Title level={TitleLevels.TWO}>Column</Title>
        </Box>
      </Column>
      <Column>
        <Box flat>
          <Title level={TitleLevels.TWO}>Column</Title>
        </Box>
      </Column>
    </Columns>
  ),
}

export const TailleDesColonnes: Story = {
  render: (args: ColumnsProps) => (
    <Columns {...args} >
      <Column size={1}>
        <Box>
          <Title level={TitleLevels.TWO}>Column is-1</Title>
        </Box>
      </Column>
      <Column size={2}>
        <Box>
          <Title level={TitleLevels.TWO}>Column is-2</Title>
        </Box>
      </Column>
      <Column size={3}>
        <Box>
          <Title level={TitleLevels.TWO}>Column is-3</Title>
        </Box>
      </Column>
      <Column size={4}>
        <Box>
          <Title level={TitleLevels.TWO}>Column is-4</Title>
        </Box>
      </Column>
      <Column size={5}>
        <Box>
          <Title level={TitleLevels.TWO}>Column is-5</Title>
        </Box>
      </Column>
      <Column size={6}>
        <Box>
          <Title level={TitleLevels.TWO}>Column is-6</Title>
        </Box>
      </Column>
      <Column size={7}>
        <Box>
          <Title level={TitleLevels.TWO}>Column is-7</Title>
        </Box>
      </Column>
      <Column size={8}>
        <Box>
          <Title level={TitleLevels.TWO}>Column is-8</Title>
        </Box>
      </Column>
      <Column size={9}>
        <Box>
          <Title level={TitleLevels.TWO}>Column is-9</Title>
        </Box>
      </Column>
      <Column size={10}>
        <Box>
          <Title level={TitleLevels.TWO}>Column is-10</Title>
        </Box>
      </Column>
      <Column size={11}>
        <Box>
          <Title level={TitleLevels.TWO}>Column is-11</Title>
        </Box>
      </Column>
      <Column size={12}>
        <Box>
          <Title level={TitleLevels.TWO}>Column is-12</Title>
        </Box>
      </Column>
    </Columns>
  ),
  args: {
    multiline: true,
  }
}

export const InlinedScrollVertical: Story = {
  render: (args: ColumnsProps) => (
    <Columns {...args}>
      <Column size={1}>
        <Box>
          <Title level={TitleLevels.TWO}>1 Column</Title>
        </Box>
      </Column>
      <Column size={4}>
        <Box>
          <Title level={TitleLevels.TWO}>4 Columns</Title>
        </Box>
      </Column>
      <Column size={4}>
        <Box>
          <Title level={TitleLevels.TWO}>4 Columns</Title>
        </Box>
      </Column>
      <Column size={7}>
        <Box>
          <Title level={TitleLevels.TWO}>7 Columns</Title>
        </Box>
      </Column>
    </Columns>
  ),
  args: {
    scrollable: true,
  }
}
