import * as React from 'react'

import { Meta, Story } from '@storybook/react'
import { List, ListIconStatus, ListItem } from '../list'
import { ListProps } from './ListProps'
import { ListItemDescription } from './item'
import { IconName } from '../icon'

export default {
  title: 'Components/List',
  component: List,
  subcomponents: { ListItem, ListItemDescription },
} as Meta

export const Base: Story<ListProps> = (args) => (
  <List {...args}>
    <ListItem>Bonjour</ListItem>
    <ListItem>Bonjour</ListItem>
    <ListItem>Bonjour</ListItem>
  </List>
)
export const ListeDescription: Story<ListProps> = (args) => (
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

export const AvecIcônes: Story<ListProps> = (args) => (
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
AvecIcônes.args = {}
