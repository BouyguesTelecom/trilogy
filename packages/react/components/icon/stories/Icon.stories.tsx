import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { IconColor, IconSize } from '../IconEnum';
import { IconName } from '../IconNameEnum';

import { IconScreen } from '../../../../../examples/react-template/screens/Icon';

const meta = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Icon component displays a graphical symbol that represents an action, object, or concept.',
      },
    },
  },
  argTypes: {
    name: {
      description: 'The name of the icon to display',
      control: { type: 'select' },
      options: Object.values(IconName),
    },
    size: {
      description: 'The size of the icon',
      control: { type: 'select' },
      options: Object.values(IconSize),
    },
    color: {
      description: 'The color of the icon',
      control: { type: 'select' },
      options: [undefined, ...Object.values(IconColor)],
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof Icon>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <IconScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Icon> = {
  args: {
    name: IconName.HOME,
    size: IconSize.MEDIUM,
  },
};

export const Sizes: StoryObj<typeof Icon> = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div>
        <Icon name={IconName.HOME} size={IconSize.XSMALL} />
        <p>XSmall</p>
      </div>
      <div>
        <Icon name={IconName.HOME} size={IconSize.SMALL} />
        <p>Small</p>
      </div>
      <div>
        <Icon name={IconName.HOME} size={IconSize.MEDIUM} />
        <p>Medium</p>
      </div>
      <div>
        <Icon name={IconName.HOME} size={IconSize.LARGE} />
        <p>Large</p>
      </div>
      <div>
        <Icon name={IconName.HOME} size={IconSize.XLARGE} />
        <p>XLarge</p>
      </div>
    </div>
  ),
};

export const Colors: StoryObj<typeof Icon> = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div>
        <Icon name={IconName.ALERT} size={IconSize.LARGE} />
        <p>Default</p>
      </div>
      <div>
        <Icon name={IconName.ALERT} size={IconSize.LARGE} color={IconColor.PRIMARY} />
        <p>Primary</p>
      </div>
      <div>
        <Icon name={IconName.ALERT} size={IconSize.LARGE} color={IconColor.SECONDARY} />
        <p>Secondary</p>
      </div>
      <div>
        <Icon name={IconName.ALERT} size={IconSize.LARGE} color={IconColor.SUCCESS} />
        <p>Success</p>
      </div>
      <div>
        <Icon name={IconName.ALERT} size={IconSize.LARGE} color={IconColor.WARNING} />
        <p>Warning</p>
      </div>
      <div>
        <Icon name={IconName.ALERT} size={IconSize.LARGE} color={IconColor.ERROR} />
        <p>Error</p>
      </div>
    </div>
  ),
};

export const IconGrid: StoryObj<typeof Icon> = {
  render: () => {
    const iconNames = Object.values(IconName);
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1rem' }}>
        {iconNames.map((name) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', border: '1px solid #eee', borderRadius: '4px' }}>
            <Icon name={name} size={IconSize.MEDIUM} />
            <p style={{ fontSize: '12px', marginTop: '0.5rem', textAlign: 'center' }}>{name}</p>
          </div>
        ))}
      </div>
    );
  },
};

export default meta;
