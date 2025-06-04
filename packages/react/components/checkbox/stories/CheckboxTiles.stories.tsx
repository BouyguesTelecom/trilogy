import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { CheckboxTile, CheckboxTiles } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { Alignable } from '../../../objects';
import { IconName } from '../../icon';

const meta = {
  title: 'Checkbox/CheckboxTiles',
  component: CheckboxTiles,
  subcomponents: { CheckboxTile },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The CheckboxTiles component is used to display checkboxes as visual tiles.',
      },
    },
  },
  argTypes: {
    align: {
      description: 'The horizontal alignment of the checkbox tiles',
      control: 'select',
      options: [
        Alignable.ALIGNED_START,
        Alignable.ALIGNED_END,
        Alignable.ALIGNED_CENTER,
      ],
    },
    verticalAlign: {
      description: 'The vertical alignment of the checkbox tiles',
      control: 'select',
      options: [
        Alignable.ALIGNED_START,
        Alignable.ALIGNED_CENTER,
        Alignable.ALIGNED_END,
      ],
    },
    accessibilityLabelledBy: {
      description: 'ID of an element that labels this group for accessibility',
      control: 'text',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof CheckboxTiles>;

renderBefore(meta);

// Basic examples
export const Basic: StoryObj<typeof CheckboxTiles> = {
  render: () => (
    <div>
      <p id="shipping-options">Select shipping method:</p>
      <CheckboxTiles accessibilityLabelledBy="shipping-options">
        <CheckboxTile 
          name="standard" 
          label="Standard Shipping" 
          value="standard"
          description="Delivery in 5-7 business days"
          icon={IconName.ALERT}
        />
        <CheckboxTile 
          name="express" 
          label="Express Shipping" 
          value="express"
          description="Delivery in 2-3 business days"
          icon={IconName.BELL}
        />
        <CheckboxTile 
          name="overnight" 
          label="Overnight Shipping" 
          value="overnight"
          description="Next business day delivery"
          icon={IconName.EYE}
        />
      </CheckboxTiles>
    </div>
  ),
};

export const CenteredAlignment: StoryObj<typeof CheckboxTiles> = {
  render: () => (
    <div>
      <p id="payment-methods">Select payment method:</p>
      <CheckboxTiles 
        accessibilityLabelledBy="payment-methods"
        align={Alignable.ALIGNED_CENTER}
        verticalAlign={Alignable.ALIGNED_CENTER}
      >
        <CheckboxTile 
          name="credit" 
          label="Credit Card" 
          value="credit"
          description="Visa, Mastercard, Amex"
          icon={IconName.INFOS_CIRCLE}
        />
        <CheckboxTile 
          name="paypal" 
          label="PayPal" 
          value="paypal"
          description="Fast and secure online payments"
          icon={IconName.SEARCH}
        />
        <CheckboxTile 
          name="bank" 
          label="Bank Transfer" 
          value="bank"
          description="Direct bank account payment"
          icon={IconName.TIMES}
        />
      </CheckboxTiles>
    </div>
  ),
};

export const HorizontalLayout: StoryObj<typeof CheckboxTiles> = {
  render: () => (
    <div>
      <p id="subscription-tiers">Select subscription tier:</p>
      <CheckboxTiles accessibilityLabelledBy="subscription-tiers">
        <CheckboxTile 
          name="basic" 
          label="Basic" 
          value="basic"
          description="Essential features for individuals"
          icon={IconName.TRASH}
          horizontal
        />
        <CheckboxTile 
          name="pro" 
          label="Professional" 
          value="pro"
          description="Advanced features for professionals"
          icon={IconName.ARROW_UP}
          horizontal
        />
        <CheckboxTile 
          name="enterprise" 
          label="Enterprise" 
          value="enterprise"
          description="Complete solution for organizations"
          icon={IconName.ARROW_RIGHT}
          horizontal
        />
      </CheckboxTiles>
    </div>
  ),
};

export default meta;