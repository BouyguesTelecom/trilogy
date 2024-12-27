import * as React from "react"

import { Meta, Story } from "@storybook/react"
import { CheckboxProps } from "./CheckboxProps"
import { Checkbox, CheckboxTile, CheckboxTiles } from "./index"
import { CheckboxTileProps } from "./tiles/tile/CheckboxTileProps"
import { IconName } from "../icon"

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  subcomponents: { CheckboxTiles, CheckboxTile },
} as Meta;

export const Base: Story<CheckboxProps> = (args) => (
  <>
    <Checkbox {...args} />
    <Checkbox
      label="Je suis cochée"
      name="checkbox2"
      value="default value 2"
      onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      checked
    />
    <Checkbox
      label="Je suis disabled"
      name="checkbox3"
      value="default value 3"
      onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      disabled
    />
  </>
);

Base.args = {
  label: "On peut me cocher grâce au controls ↓ ",
  name: "checkbox1",
  value: "default value 1",
  onChange: (e) => console.log(e.checkboxValue, e.checkboxChecked),
  checked: false,
  disabled: false,
};

export const Tile: Story<CheckboxTileProps> = (args) => (
  <CheckboxTiles>
    <CheckboxTile {...args} />
    <CheckboxTile
      label="Radio tile avec Icône"
      name="checkbox"
      value="default value 1"
      onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      checked
      description={"Je suis la description de la checkbox"}
      icon={IconName.INFOS_CIRCLE}
    />
    <CheckboxTile
      label="Radio tile disabled"
      name="checkbox"
      value="default value 1"
      onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      description={"Je suis la description de la checkbox"}
      disabled
      icon={IconName.ALERT}
    />
  </CheckboxTiles>
);

Tile.args = {
  label: "Checkbox Tile",
  description: "On peut me cocher et ajouter une icône grâce au controls ↓ ",
  name: "checkbox",
  value: "default value 1",
  onChange: (e) => console.log(e.checkboxValue, e.checkboxChecked),
  checked: false,
  disabled: false,
};

export const TileHorizontal: Story<CheckboxTileProps> = (args) => (
  <CheckboxTiles>
    <CheckboxTile {...args} />
    <CheckboxTile
      label="Radio tile avec Icône"
      name="checkbox"
      value="default value 1"
      onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      checked
      description={"Je suis la description de la checkbox"}
      icon={IconName.INFOS_CIRCLE}
      horizontal
    />
    <CheckboxTile
      label="Radio tile horizontal disabled"
      name="checkbox"
      value="default value 1"
      onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      description={"Je suis la description de la checkbox"}
      disabled
      icon={IconName.TIMES}
      horizontal
    />
  </CheckboxTiles>
);

TileHorizontal.args = {
  label: "Checkbox tile horizontal",
  description: "On peut me cocher et ajouter une icône grâce au controls ↓ ",
  name: "checkbox",
  value: "default value 1",
  onChange: (e) => console.log(e.checkboxValue, e.checkboxChecked),
  checked: false,
  disabled: false,
  horizontal: true,
  icon: IconName.CHECK_CIRCLE,
};
