import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ListItem, ListIconStatus } from '../item';
import { List } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { IconName } from '../../../components/icon';

const meta = {
  title: 'List/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The ListItem component represents an individual item within a List component.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content of the list item',
      control: 'text',
    },
    icon: {
      description: 'Icon to display with the list item',
      control: { type: 'select' },
      options: [undefined, ...Object.values(IconName)],
    },
    iconStatus: {
      description: 'Status color for the icon',
      control: { type: 'select' },
      options: [undefined, ...Object.values(ListIconStatus)],
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof ListItem>;

renderBefore(meta);

export const Basic: StoryObj<typeof ListItem> = {
  args: {
    children: 'Basic list item',
  },
  render: (args) => (
    <List>
      <ListItem {...args} />
    </List>
  ),
};

export const WithIcon: StoryObj<typeof ListItem> = {
  args: {
    children: 'List item with icon',
    icon: IconName.CHECK,
  },
  render: (args) => (
    <List>
      <ListItem {...args} />
    </List>
  ),
};

export const WithIconStatus: StoryObj<typeof ListItem> = {
  args: {
    children: 'List item with icon and status',
    icon: IconName.CHECK,
    iconStatus: ListIconStatus.SUCCESS,
  },
  render: (args) => (
    <List>
      <ListItem {...args} />
    </List>
  ),
};

export const IconStatusVariants: StoryObj<typeof ListItem> = {
  render: () => (
    <List>
      <ListItem icon={IconName.CHECK} iconStatus={ListIconStatus.SUCCESS}>
        Success status
      </ListItem>
      <ListItem icon={IconName.INFOS_CIRCLE} iconStatus={ListIconStatus.INFO}>
        Info status
      </ListItem>
      <ListItem icon={IconName.ALERT} iconStatus={ListIconStatus.WARNING}>
        Warning status
      </ListItem>
      <ListItem icon={IconName.ALERT} iconStatus={ListIconStatus.ERROR}>
        Error status
      </ListItem>
    </List>
  ),
};

export const WithRichContent: StoryObj<typeof ListItem> = {
  render: () => (
    <List>
      <ListItem>
        <div>
          <strong>Title</strong>
          <p>Description text for the list item that can span multiple lines and provide additional context.</p>
        </div>
      </ListItem>
    </List>
  ),
};

export default meta;
