import React from 'react'

import { Meta, Story } from '@storybook/react'
import Breadcrumb from './Breadcrumb'
import BreadcrumbItem from './item'
import { BreadcrumbProps } from './BreadcrumbProps'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem },
} as Meta

export const Base: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem href='https://google.fr'>Google</BreadcrumbItem>
    <BreadcrumbItem to='#anchor'>Parent avec ancre</BreadcrumbItem>
    <BreadcrumbItem>Parent</BreadcrumbItem>
    <BreadcrumbItem active>Page en cours</BreadcrumbItem>
  </Breadcrumb>
)
