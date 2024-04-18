import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { PopoverProps } from "./PopoverProps";
import { Popover, PopoverDirection } from ".";
import { Button } from "../button";

export default {
  title: "Components/Popover",
  component: Popover,
} as Meta;

export const Base: Story<PopoverProps> = (args) => (
  <Popover {...args}>
    <Button variant={"PRIMARY"}>Simple Popover</Button>
  </Popover>
);
Base.args = {
  content: "Voici une simple popover",
};

export const PopoverActive: Story<PopoverProps> = (args) => (
  <Popover {...args}>
    <Button variant={"PRIMARY"}>Simple Popover</Button>
  </Popover>
);
PopoverActive.args = {
  active: true,
  content: "Popover active",
};

export const PopoverDirections: Story<PopoverProps> = (args) => (
  <>
    <Popover {...args}>
      <Button variant={"PRIMARY"}>Bottom</Button>
    </Popover>
    <Popover content="En haut">
      <Button variant={"PRIMARY"}>top</Button>
    </Popover>
    <Popover direction={PopoverDirection.RIGHT} content="A droite">
      <Button variant={"PRIMARY"}>Right</Button>
    </Popover>
    <Popover direction={PopoverDirection.LEFT} content="A gauche">
      <Button variant={"PRIMARY"}>Left</Button>
    </Popover>
  </>
);
PopoverDirections.args = {
  direction: PopoverDirection.BOTTOM,
  content: "Bottom popover",
};
