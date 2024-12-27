import * as React from "react";

import { Meta, Story } from "@storybook/react";
import Divider from "./Divider";
import { DividerProps } from "./DividerProps";
import { IconName } from "../icon";
import { TrilogyColor } from "../../objects";

export default {
  title: "Components/Divider",
  component: Divider,
} as Meta;

export const Base: Story<DividerProps> = (args) => <Divider {...args} />;

export const AvecText: Story<DividerProps> = (args) => <Divider {...args} />;
AvecText.args = {
  content: "Nouveau Message",
};

export const AvecUneIcône: Story<DividerProps> = (args) => (
  <Divider {...args} />
);
AvecUneIcône.args = {
  iconName: IconName.EYE,
};
