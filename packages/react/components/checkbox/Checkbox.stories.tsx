import * as React from "react";

import { Meta, Story } from "@storybook/react";
import Checkbox from "./Checkbox";
import { CheckboxProps } from "./CheckboxProps";
import { IconName } from "../icon";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta;

export const Base: Story<CheckboxProps> = (args) => (
  <>
    <Checkbox {...args} />
    <Checkbox
      label="Je suis cochée"
      name="checkbox2"
      value="default value 2"
      onClick={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      checked
    />
    <Checkbox
      label="Je suis disabled"
      name="checkbox3"
      value="default value 3"
      onClick={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      disabled
    />
  </>
);

Base.args = {
  label: "On peut me cocher grâce au controls ↓ ",
  name: "checkbox1",
  value: "default value 1",
  onClick: (e) => console.log(e.checkboxValue, e.checkboxChecked),
  checked: false,
  disabled: false,
};

export const Tile: Story<CheckboxProps> = (args) => (
  <>
    <Checkbox {...args} />
    <Checkbox
      label="Checkbox tile avec Icône"
      name="checkbox"
      value="default value 1"
      onClick={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      checked
      description={"Je suis la description de la checkbox"}
      disabled={false}
      tile={true}
      iconTile={IconName.INFOS_CIRCLE}
    />
    <Checkbox
      label="Checkbox tile disabled"
      name="checkbox"
      value="default value 1"
      onClick={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      description={"Je suis la description de la checkbox"}
      disabled
      tile={true}
      iconTile={IconName.UI_5G}
    />
  </>
);

Tile.args = {
  label: "Checkbox Tile",
  description: "On peut me cocher et ajouter une icône grâce au controls ↓ ",
  name: "checkbox",
  value: "default value 1",
  onClick: (e) => console.log(e.checkboxValue, e.checkboxChecked),
  checked: false,
  disabled: false,
  tile: true,
};

export const TileHorizontal: Story<CheckboxProps> = (args) => (
  <>
    <Checkbox {...args} />
    <Checkbox
      label="Checkbox tile avec Icône"
      name="checkbox"
      value="default value 1"
      onClick={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      checked
      description={"Je suis la description de la checkbox"}
      disabled={false}
      tile={true}
      iconTile={IconName.INFOS_CIRCLE}
      horizontalTile={true}
    />
    <Checkbox
      label="Checkbox tile horizontal disabled"
      name="checkbox"
      value="default value 1"
      onClick={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      description={"Je suis la description de la checkbox"}
      disabled
      tile={true}
      iconTile={IconName.WATCH}
      horizontalTile={true}
    />
  </>
);

TileHorizontal.args = {
  label: "Checkbox tile horizontal",
  description: "On peut me cocher et ajouter une icône grâce au controls ↓ ",
  name: "checkbox",
  value: "default value 1",
  onClick: (e) => console.log(e.checkboxValue, e.checkboxChecked),
  checked: false,
  disabled: false,
  tile: true,
  horizontalTile: true,
  iconTile: IconName.CHECK_CIRCLE,
};
