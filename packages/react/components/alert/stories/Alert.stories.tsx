import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Alert, ToasterAlertProvider } from '../index';
import { AlertMarkup } from '../AlertEnum';
import { ToasterAlertPosition, ToasterAlertFloat } from '../AlertProps';
import { renderBefore } from '../../../../storybook/preview';
import { StatusState } from '../../../objects';
import { IconName } from '../../icon';

import { AlertScreen } from '../../../../../examples/react-template/screens/Alert';

const meta = {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Alert component is used to display important messages or notifications to the user.',
      },
    },
  },
  argTypes: {
    status: {
      description: 'The status color of the alert',
      control: { type: 'inline-radio' },
      options: [
        StatusState.SUCCESS,
        StatusState.WARNING,
        StatusState.ERROR,
        StatusState.INFO,
      ],
    },
    title: {
      description: 'The title of the alert',
      control: 'text',
    },
    description: {
      description: 'The description or content of the alert',
      control: 'text',
    },
    iconName: {
      description: 'Custom icon to display in the alert',
      control: 'select',
      options: Object.values(IconName),
    },
    markup: {
      description: 'The HTML element to use for the title',
      control: { type: 'inline-radio' },
      options: Object.values(AlertMarkup),
    },
    display: {
      description: 'Whether to display the alert',
      control: 'boolean',
    },
    toaster: {
      description: 'Whether this alert is a toaster notification',
      control: 'boolean',
    },
    banner: {
      description: 'Whether this alert is a banner',
      control: 'boolean',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
    onClick: {
      description: 'Function called when clicking on the alert',
      action: 'clicked',
    },
  },
} as Meta<typeof Alert>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <AlertScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Alert> = {
  args: {
    title: 'Information',
    description: 'This is a basic alert message.',
    status: StatusState.INFO,
  },
};

export const Success: StoryObj<typeof Alert> = {
  args: {
    title: 'Success',
    description: 'The operation was completed successfully.',
    status: StatusState.SUCCESS,
  },
};

export const Warning: StoryObj<typeof Alert> = {
  args: {
    title: 'Warning',
    description: 'Please be careful with this operation.',
    status: StatusState.WARNING,
  },
};

export const Error: StoryObj<typeof Alert> = {
  args: {
    title: 'Error',
    description: 'Something went wrong. Please try again.',
    status: StatusState.ERROR,
  },
};

export const WithCustomIcon: StoryObj<typeof Alert> = {
  args: {
    title: 'Custom Icon',
    description: 'This alert uses a custom icon.',
    status: StatusState.INFO,
    iconName: IconName.ALERT,
  },
};

export const Banner: StoryObj<typeof Alert> = {
  args: {
    title: 'Important Notice',
    description: 'This is a banner alert that spans the full width.',
    status: StatusState.INFO,
    banner: true,
  },
};

export const WithCustomMarkup: StoryObj<typeof Alert> = {
  args: {
    title: 'Custom Markup',
    description: 'This alert uses h3 for the title.',
    status: StatusState.INFO,
    markup: AlertMarkup.H3,
  },
};

export default meta;