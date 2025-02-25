import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonVariant, ButtonList } from "./index";
import { IconName } from "../icon";
import { ButtonProps } from "./ButtonProps";

const meta = {
  title: "Components/Button",
  component: Button,
  subcomponents: { ButtonList },
  argTypes:{
    iconName: {
      control: 'select',
      options: Object.values(IconName),
      table: {
        type: { summary: 'IconName' },
      },
    },
  }
} satisfies Meta<ButtonProps>;

export default meta
type Story = StoryObj<typeof meta>

const TemplateMultiple = (args: ButtonProps) => (
  <ButtonList>
    <Button variant={ButtonVariant.PRIMARY} {...args} />
    <Button variant={ButtonVariant.SECONDARY} {...args} />
    <Button variant={ButtonVariant.CONVERSION} disabled {...args} />
    <Button variant={ButtonVariant.GHOST} loading {...args} />
  </ButtonList>
)

export const Base: Story = {
  render: TemplateMultiple,
  args: {
    children: "Button",
  },
}

export const Primary: Story = {
  args: {
    children: "Button primary",
    variant: ButtonVariant.PRIMARY,
  },
}

export const Secondary: Story = {
  args: {
    children: "Button secondary",
    variant: ButtonVariant.SECONDARY,
  },
}

export const Accent: Story = {
  args: {
    children: "Button accent",
    variant: ButtonVariant.CONVERSION,
  },
}

export const Ghost: Story = {
  args: {
    children: "Button ghost",
    variant: ButtonVariant.GHOST,
  },
}

export const WithIcon: Story = {
  args: {
    children: "Valider",
    variant: ButtonVariant.PRIMARY,
    iconName: IconName.CHECK_CIRCLE,
  },
}

export const ButtonLoading: Story = {
  args: {
    children: "Loading",
    loading: true,
    variant: ButtonVariant.PRIMARY,
  },
}
