import * as React from "react";

import { Meta, Story } from "@storybook/react";

import Switch from "./Switch";
import { SwitchProps } from "./SwitchProps";

export default {
  title: "Components/Switch",
  component: Switch,
} as Meta;

export const Base: Story<SwitchProps> = (args) => <Switch {...args} />;
Base.args = {
  disabled: false,
  reversed: false,
  checked: false,
  label: "Switch one",
  name: "switch one",
  onChange: (e) => {
    console.log("SwitchState =>", e.switchState);
    console.log("SwitchSName =>", e.switchName);
  },
  onClick: (e) => {
    console.log("SwitchState =>", e.switchState);
    console.log("SwitchSName =>", e.switchName);
  },
};

export const Disabled: Story<SwitchProps> = (args) => <Switch {...args} />;
Disabled.args = {
  disabled: true,
  reversed: false,
  checked: false,
  label: "Switch disabled",
  name: "switch disabled",
  onChange: (e) => {
    console.log("SwitchState =>", e.switchState);
    console.log("SwitchSName =>", e.switchName);
  },
  onClick: (e) => {
    console.log("SwitchState =>", e.switchState);
    console.log("SwitchSName =>", e.switchName);
  },
};

export const Checked: Story<SwitchProps> = (args) => <Switch {...args} />;
Checked.args = {
  disabled: false,
  reversed: false,
  checked: true,
  label: "Switch checked",
  name: "switch checked",
  onChange: (e) => {
    console.log("SwitchState =>", e.switchState);
    console.log("SwitchSName =>", e.switchName);
  },
  onClick: (e) => {
    console.log("SwitchState =>", e.switchState);
    console.log("SwitchSName =>", e.switchName);
  },
};
