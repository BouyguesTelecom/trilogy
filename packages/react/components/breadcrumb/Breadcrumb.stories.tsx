import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './index'
import BreadcrumbItem from './item'
import { BreadcrumbProps } from './BreadcrumbProps'

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem },
} satisfies Meta<BreadcrumbProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: BreadcrumbProps) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem href='https://google.fr'>Google</BreadcrumbItem>
    <BreadcrumbItem to='#anchor'>Parent avec ancre</BreadcrumbItem>
    <BreadcrumbItem>Parent</BreadcrumbItem>
    <BreadcrumbItem active>Page en cours</BreadcrumbItem>
  </Breadcrumb>
)

export const Base: Story = {
  render: Template,
}
