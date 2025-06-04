import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { List, ListItem, ListIconStatus } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { IconName } from '../../icon';

import { ListScreen } from '../../../../../examples/react-template/screens/List';

const meta = {
  title: 'List',
  component: List,
  subcomponents: {
    ListItem,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The List component is used to display a collection of items in a structured format.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'ListItem components to display',
      control: { type: 'object' },
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof List>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <ListScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof List> = {
  args: {
    children: (
      <>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </>
    ),
  },
};

export const WithIcons: StoryObj<typeof List> = {
  render: () => (
    <List>
      <ListItem icon={IconName.CHECK}>Item with check icon</ListItem>
      <ListItem icon={IconName.INFOS_CIRCLE}>Item with info icon</ListItem>
      <ListItem icon={IconName.ALERT}>Item with alert icon</ListItem>
    </List>
  ),
};

export const WithIconStatus: StoryObj<typeof List> = {
  render: () => (
    <List>
      <ListItem icon={IconName.CHECK} iconStatus={ListIconStatus.SUCCESS}>Success item</ListItem>
      <ListItem icon={IconName.INFOS_CIRCLE} iconStatus={ListIconStatus.INFO}>Info item</ListItem>
      <ListItem icon={IconName.ALERT} iconStatus={ListIconStatus.ERROR}>Error item</ListItem>
      <ListItem icon={IconName.ALERT} iconStatus={ListIconStatus.WARNING}>Warning item</ListItem>
    </List>
  ),
};

export const WithRichContent: StoryObj<typeof List> = {
  render: () => (
    <List>
      <ListItem>
        <strong>Bold item</strong>
      </ListItem>
      <ListItem>
        <div>
          <h4>Item with multiple lines</h4>
          <p>This is a description for the item.</p>
        </div>
      </ListItem>
      <ListItem>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <span>Item with action</span>
          <button>Click me</button>
        </div>
      </ListItem>
    </List>
  ),
};

export default meta;
