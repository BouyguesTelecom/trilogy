import * as React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";
import { ButtonList } from "./list";
import { ButtonVariant } from "./ButtonEnum";
import { IconName } from "../icon";

export default {
  title: "Components/Button",
  component: Button,
  subcomponents: { ButtonList },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const TemplateMultiple: ComponentStory<typeof Button> = (args) => (
  <ButtonList>
    <Button variant={ButtonVariant.PRIMARY} {...args} />
    <Button variant={ButtonVariant.SECONDARY} {...args} />
    <Button variant={ButtonVariant.CONVERSION} disabled {...args} />
    <Button variant={ButtonVariant.GHOST} loading {...args} />
  </ButtonList>
);

export const Base = TemplateMultiple.bind({});
Base.args = {
  children: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Button primary",
  variant: ButtonVariant.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button secondary",
  variant: ButtonVariant.SECONDARY,
};

export const Accent = Template.bind({});
Accent.args = {
  children: "Button accent",
  variant: ButtonVariant.CONVERSION,
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: "Button ghost",
  variant: ButtonVariant.GHOST,
};

export const Group: ComponentStory<typeof ButtonList> = (args) => (
  <ButtonList {...args}>
    <Button variant={ButtonVariant.PRIMARY}>Button Primary</Button>
    <Button variant={ButtonVariant.SECONDARY}>Button Secondary</Button>
    <Button variant={ButtonVariant.CONVERSION}>Button Conversion</Button>
    <Button variant={ButtonVariant.GHOST}>Button Ghost</Button>
  </ButtonList>
);
Group.args = {};

export const WithIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Valider</Button>
);
WithIcon.args = {
  variant: ButtonVariant.PRIMARY,
  iconName: IconName.CHECK_CIRCLE,
};

export const ButtonLoading: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Loading</Button>
);
ButtonLoading.args = {
  loading: true,
  variant: ButtonVariant.PRIMARY,
};
