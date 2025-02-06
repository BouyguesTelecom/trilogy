import * as React from "react";

import { Meta, Story } from "@storybook/react";

import { Tag, TagList, TagVariant } from "./index";
import { TagProps } from "./TagProps";
import { IconName } from "../icon";

export default {
  title: "Components/Tag",
  component: Tag,
  subcomponents: { TagList },
} as Meta;

export const Base: Story<TagProps> = (args) => (
  <TagList>
    <Tag {...args}>Play With me !</Tag>
  </TagList>
);
Base.args = {
  variant: TagVariant.INFO,
};
export const Inversé: Story<TagProps> = (args) => (
  <TagList>
    <Tag {...args}>Play With me !</Tag>
  </TagList>
);
Inversé.args = {
  variant: TagVariant.INFO,
  inverted: true,
};

export const TagAvecIcônes: Story<TagProps> = (args) => (
  <TagList>
    <Tag {...args}/>
    <Tag iconName={IconName.CHECK_CIRCLE} variant={TagVariant.SUCCESS} label='Tag Success'/>
    <Tag iconName={IconName.ALERT} variant={TagVariant.WARNING} label='Tag Warning'/>
  </TagList>
);
TagAvecIcônes.args = {
  label: "Tag",
  iconName: IconName.EXCLAMATION_CIRCLE,
  variant: TagVariant.ERROR,
};
export const Small: Story<TagProps> = (args) => <Tag {...args}>Tag</Tag>;
Small.args = {
  small: true,
};
