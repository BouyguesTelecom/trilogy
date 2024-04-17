import * as React from "react";

import { Meta, Story } from "@storybook/react";
import Options from "./Options";
import { OptionsProps } from "./OptionsProps";
import OptionsItem from "./item";
import { OptionsItemVariant } from "./OptionsEnum";
import { IconName } from "../icon";

export default {
  title: "Components/Options",
  component: Options,
} as Meta;

export const Base: Story<OptionsProps> = (args) => (
  <Options {...args}>
    <OptionsItem
      label="50 Go"
      name="option"
      value="50go"
      variant={OptionsItemVariant.MULTILINE}
      iconName={IconName.TIMES}
      description="Adipisicing deserunt nulla incididunt aliqua sunt."
      readonly
      onChange={(e) => console.log(e.optionValue, e.optionChecked)}
      checked
    />
    <OptionsItem
      label="100 Go"
      name="option"
      onChange={(e) => console.log(e.optionValue, e.optionChecked)}
      readonly
      value="100go"
    />
  </Options>
);

export const AvecUneIcône: Story<OptionsProps> = (args) => (
  <Options {...args}>
    <OptionsItem
      label="100 Go"
      name="option"
      iconName={IconName.CLOUD_100GO}
      variant={OptionsItemVariant.ICON}
      // eslint-disable-next-line no-console
      onChange={(e) => console.log(e.optionValue, e.optionChecked)}
      readonly
      value="100go"
    />
    <OptionsItem
      disabled
      label="100 Go"
      name="option"
      iconName={IconName.CLOUD_100GO}
      variant={OptionsItemVariant.ICON}
      // eslint-disable-next-line no-console
      onChange={(e) => console.log(e.optionValue, e.optionChecked)}
      readonly
      value="100go"
    />
  </Options>
);

export const AvecIcôneEtTexte: Story<OptionsProps> = (args) => (
  <Options {...args}>
    <OptionsItem
      label="50 Go"
      name="option"
      value="50go"
      variant={OptionsItemVariant.MULTILINE}
      iconName={IconName.TIMES}
      description="Adipisicing deserunt nulla incididunt aliqua sunt."
      // eslint-disable-next-line no-console
      readonly
      onChange={(e) => console.log(e.optionValue, e.optionChecked)}
    />
    <OptionsItem
      label="50 Go"
      name="option"
      value="50go"
      variant={OptionsItemVariant.MULTILINE}
      iconName={IconName.TIMES}
      description="Adipisicing deserunt nulla incididunt aliqua sunt."
      // eslint-disable-next-line no-console
      readonly
      onChange={(e) => console.log(e.optionValue, e.optionChecked)}
      checked
    />
    <OptionsItem
      disabled
      label="50 Go"
      name="option"
      value="50go"
      variant={OptionsItemVariant.MULTILINE}
      iconName={IconName.TIMES}
      description="Adipisicing deserunt nulla incididunt aliqua sunt."
      // eslint-disable-next-line no-console
      readonly
      onChange={(e) => console.log(e.optionValue, e.optionChecked)}
    />
  </Options>
);
