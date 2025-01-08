import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { List, ListIconStatus, ListItem } from './index'
import { ListProps } from './ListProps'
import { LinkProps } from '../link/LinkProps'
import { IconName } from '../icon'
import { ListItemDescription } from './item'

const meta = {
  title: 'Components/List',
  component: List,
  subcomponents: { ListItem, ListItemDescription },
} satisfies Meta<ListProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: LinkProps) => (
  <List {...args}>
    <ListItem status={ListIconStatus.SUCCESS} iconName={IconName.CHECK}>
      Bonjour
    </ListItem>
    <ListItem status={ListIconStatus.ERROR} iconName={IconName.TIMES}>
      Bonjour
    </ListItem>
    <ListItem status={ListIconStatus.ERROR} iconName={IconName.TIMES}>
      Bonjour
    </ListItem>
  </List>
)

const TemplateDescription = (args: LinkProps) => (
  <List {...args}>
    <ListItem>
      <ListItemDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book
      </ListItemDescription>
    </ListItem>
    <ListItem>
      <ListItemDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book
      </ListItemDescription>
    </ListItem>
  </List>
)

export const Base: Story = {
  render: Template,
}

export const ListeDescription: Story = {
  render: TemplateDescription,
}
