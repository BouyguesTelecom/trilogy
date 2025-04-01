// Button.stories.tsx

import * as React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Button, ButtonVariant } from '.'
import { ButtonProps } from './ButtonProps'

// Default export with metadata
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    // Control options for props
    variant: { control: 'select', options: [ButtonVariant.CONVERSION, ButtonVariant.PRIMARY, ButtonVariant.SECONDARY] },
    children: { control: 'text' },
  },
} as Meta<ButtonProps>

// Template function
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

// Default story
export const Conversion = Template.bind({})
Conversion.args = {
  children: 'Conversion Button',
  variant: ButtonVariant.CONVERSION,
}
