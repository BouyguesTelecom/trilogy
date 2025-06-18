import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxList } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { Alignable } from '../../../objects';

const meta = {
  title: 'Checkbox/CheckboxList',
  component: CheckboxList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The CheckboxList component is used to group multiple checkboxes together.',
      },
    },
  },
  argTypes: {
    align: {
      description: 'The horizontal alignment of the checkboxes',
      control: 'select',
      options: [
        Alignable.ALIGNED_START,
        Alignable.ALIGNED_END,
        Alignable.ALIGNED_CENTER,
      ],
    },
    horizontalMobile: {
      description: 'Whether to display checkboxes horizontally on mobile devices',
      control: 'boolean',
    },
    verticalDesktop: {
      description: 'Whether to display checkboxes vertically on desktop devices',
      control: 'boolean',
    },
    accessibilityLabelledBy: {
      description: 'ID of an element that labels this list for accessibility',
      control: 'text',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
    children: {
      description: 'The checkbox elements to display in the list',
    },
  },
} as Meta<typeof CheckboxList>;

renderBefore(meta);

// Basic examples
export const Basic: StoryObj<typeof CheckboxList> = {
  render: () => (
    <div>
      <p id="contact-methods">How would you like to be contacted?</p>
      <CheckboxList accessibilityLabelledBy="contact-methods">
        <Checkbox name="email" label="Email" value="email" />
        <Checkbox name="phone" label="Phone" value="phone" />
        <Checkbox name="mail" label="Mail" value="mail" />
      </CheckboxList>
    </div>
  ),
};

export const Horizontal: StoryObj<typeof CheckboxList> = {
  render: () => (
    <div>
      <p id="subscription-options">Select subscription options:</p>
      <CheckboxList accessibilityLabelledBy="subscription-options" align={Alignable.ALIGNED_CENTER}>
        <Checkbox name="monthly" label="Monthly" value="monthly" />
        <Checkbox name="quarterly" label="Quarterly" value="quarterly" />
        <Checkbox name="yearly" label="Yearly" value="yearly" />
      </CheckboxList>
    </div>
  ),
};

export const VerticalDesktop: StoryObj<typeof CheckboxList> = {
  render: () => (
    <div>
      <p id="preferences">Select your preferences:</p>
      <CheckboxList accessibilityLabelledBy="preferences" verticalDesktop>
        <Checkbox name="pref1" label="Receive newsletter" value="newsletter" />
        <Checkbox name="pref2" label="Product updates" value="updates" />
        <Checkbox name="pref3" label="Special offers" value="offers" />
        <Checkbox name="pref4" label="Partner promotions" value="promotions" />
      </CheckboxList>
    </div>
  ),
};

export const AlignedCenter: StoryObj<typeof CheckboxList> = {
  render: () => (
    <div>
      <p id="terms">Agreement terms:</p>
      <CheckboxList accessibilityLabelledBy="terms" align={Alignable.ALIGNED_CENTER}>
        <Checkbox name="terms" label="I agree to the terms and conditions" value="terms" required />
        <Checkbox name="privacy" label="I agree to the privacy policy" value="privacy" required />
      </CheckboxList>
    </div>
  ),
};

export const WithDisabledOptions: StoryObj<typeof CheckboxList> = {
  render: () => (
    <div>
      <p id="plan-options">Select plan options:</p>
      <CheckboxList accessibilityLabelledBy="plan-options">
        <Checkbox name="basic" label="Basic plan" value="basic" />
        <Checkbox name="premium" label="Premium plan" value="premium" />
        <Checkbox name="enterprise" label="Enterprise plan (coming soon)" value="enterprise" disabled />
      </CheckboxList>
    </div>
  ),
};

export default meta;