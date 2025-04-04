import type { Meta, StoryObj } from '@storybook/react'
import { Columns } from '../columns'
import { Alignable, BoxContent, Column, Link, Title } from '../../lib'
import Breadcrumb from './Breadcrumb'
import { Text } from '../text'
import BreadcrumbItem from './item'
import { Box } from '../box'

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem }
}

export default meta

type Story = StoryObj<typeof Breadcrumb>


export const Example: Story = {
  render: () => (
    <Columns multiline>
      <Column size={4}>
        <Breadcrumb>
          <BreadcrumbItem href="https://google.fr"> Google </BreadcrumbItem>
          <BreadcrumbItem to="#anchor"> Parent avec ancre </BreadcrumbItem>
          <BreadcrumbItem> Parent </BreadcrumbItem>
          <BreadcrumbItem active> Page en cours </BreadcrumbItem>
        </Breadcrumb>
      </Column>
    </Columns>
  ),
}
