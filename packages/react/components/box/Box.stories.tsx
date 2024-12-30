import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, BoxContent, BoxHeader, BoxFooter } from './index'
import { Title, TitleLevels } from '../title'
import { Text } from '../text'
import { TrilogyColor } from '../../objects'
import { Link } from '../link'
import { Column, Columns } from '../columns'

const meta = {
  title: 'Components/Box',
  component: Box,
} satisfies Meta<BoxProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: BoxProps) => (
  <Box {...args}>
    <BoxHeader>Box Header</BoxHeader>
    <BoxContent>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Phasellus nec iaculis
        mauris.
      </Text>
    </BoxContent>
    <BoxFooter>
      <Link>Link</Link>
    </BoxFooter>
  </Box>
)

export const Base: Story = {
  render: Template,
}

export const Skeleton: Story = {
  render: Template,
  args: {
    skeleton: true,
  },
}

export const BoxCliquable: Story = {
  render: Template,
  args: {
    onClick: () => console.log('box clicked'),
  },
}

export const BoxAccentuée: Story = {
  render: Template,
  args: {
    highlighted: TrilogyColor.WARNING,
  },
}

export const BoxFlat: Story = {
  render: Template,
  args: {
    flat: true,
  },
}

export const BoxAvecBackgroundImage: Story = {
  render: Template,
  args: {
    backgroundSrc: 'https://fastly.picsum.photos/id/1/1500/600.jpg?hmac=vRq8e_89Nx5g8Sm26xFn0uKaWSG-FKsap2B1EHt3ZTM',
  },
}

export const BoxFullheight: Story = {
  render: (args) => (
    <Columns>
      <Column>
        <Box {...args}>
          <BoxContent>
            <Title level={TitleLevels.ONE}>
              Box Title
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Quis
              eleifend quam adipiscing vitae proin sagittis nisl rhoncus.
            </Text>
          </BoxContent>
        </Box>
      </Column>
      <Column>
        <Box {...args}>
          <BoxContent>
            <Title level={TitleLevels.ONE}>
              Box Title
            </Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</Text>
          </BoxContent>
        </Box>
      </Column>
    </Columns>
  ),
  args: {
    fullheight: true,
  },
}
