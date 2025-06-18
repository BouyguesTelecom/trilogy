import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ButtonList } from '../list';
import { Button } from '../index';
import { ButtonListDirectionEnum } from '../list/ButtonListEnum';
import { renderBefore } from '../../../../storybook/preview';

const meta = {
  title: 'Button/ButtonList',
  component: ButtonList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The ButtonList component is used to group buttons together with consistent spacing and alignment.',
      },
    },
  },
  argTypes: {
    direction: {
      description: 'The direction of the button list',
      control: { type: 'inline-radio' },
      options: [
        ButtonListDirectionEnum.HORIZONTAL,
        ButtonListDirectionEnum.VERTICAL,
      ],
    },
    children: {
      description: 'The buttons to include in the list',
      control: { type: 'object' },
    },
  },
} as Meta<typeof ButtonList>;

renderBefore(meta);

export const Horizontal: StoryObj<typeof ButtonList> = {
  args: {
    direction: ButtonListDirectionEnum.ROW,
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};

export const Vertical: StoryObj<typeof ButtonList> = {
  args: {
    direction: ButtonListDirectionEnum.COLUMN,
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};

export default meta;
