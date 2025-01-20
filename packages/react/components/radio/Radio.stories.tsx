import * as React from "react";

import { Meta, Story } from "@storybook/react";
import Radio from "./Radio";
import { RadioProps } from "./RadioProps";
import { IconName } from "../icon";
import { RadioList } from "./list";
import { RadioTile, RadioTiles } from './index'
import { RadioTileProps } from './tiles/tile/RadioTileProps'

export default {
  title: "Components/Radio",
  component: Radio,
  subcomponents: { RadioList,RadioTiles,RadioTile },
} as Meta;

export const Base: Story<RadioProps> = (args) => (
  <RadioList>
    <Radio {...args} />
    <Radio
      label="Je suis cochée"
      name="checkbox2"
      value="default value 2"
      onChange={(e) => console.log(e.radioValue, e.radioChecked)}
      checked
    />
    <Radio
      label="Je suis disabled"
      name="checkbox3"
      value="default value 3"
      onChange={(e) => console.log(e.radioValue, e.radioChecked)}
      disabled
    />
  </RadioList>
);
Base.args = {
  checked: false,
  label: "On peut me cocher grâce au controls ↓ ",
  name: "checkbox1",
  value: "default value 1",
  onChange: (e) => console.log(e.radioValue, e.radioChecked),
  disabled: false,
};

export const Tile: Story<RadioTileProps> = (args) => (
  <RadioTiles>
    <RadioTile {...args} />
    <RadioTile
      label="Radio tile avec Icône"
      name="checkbox"
      value="default value 1"
      onChange={(e) => console.log(e.radioValue, e.radioChecked)}
      checked
      description={"Je suis la description de la checkbox"}
      icon={IconName.INFOS_CIRCLE}
    />
    <RadioTile
      label="Radio tile disabled"
      name="checkbox"
      value="default value 1"
      onChange={(e) => console.log(e.radioValue, e.radioChecked)}
      description={"Je suis la description de la checkbox"}
      disabled
      icon={IconName.EYE}
    />
  </RadioTiles>
);
Tile.args = {
  label: "Radio Tile",
  description: "On peut me cocher et ajouter une icône grâce au controls ↓ ",
  name: "checkbox",
  value: "default value 1",
  onChange: (e) => console.log(e.radioValue, e.radioChecked),
  checked: false,
  disabled: false,
};

export const TileHorizontal: Story<RadioTileProps> = (args) => (
  <RadioTiles>
    <RadioTile {...args} />
    <RadioTile
      label="Radio tile avec Icône"
      name="checkbox"
      value="default value 1"
      onChange={(e) => console.log(e.radioValue, e.radioChecked)}
      checked
      description={"Je suis la description de la checkbox"}
      disabled={false}
      icon={IconName.INFOS_CIRCLE}
      horizontal
    />
    <RadioTile
      label="Radio tile horizontal disabled"
      name="checkbox"
      value="default value 1"
      onChange={(e) => console.log(e.radioValue, e.radioChecked)}
      description={"Je suis la description de la checkbox"}
      disabled
      icon={IconName.BELL}
      horizontal
    />
  </RadioTiles>
);
TileHorizontal.args = {
  label: "Radio tile horizontal",
  description: "On peut me cocher et ajouter une icône grâce au controls ↓ ",
  name: "checkbox",
  value: "default value 1",
  onChange: (e) => console.log(e.radioValue, e.radioChecked),
  checked: false,
  disabled: false,
  horizontal: true,
  icon: IconName.CHECK_CIRCLE,
};
