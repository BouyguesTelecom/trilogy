import * as React from "react";

import { Meta, Story } from "@storybook/react";
import Range from "./Range";
import { RangeProps } from "./RangeProps";

export default {
  title: "Components/Range",
  component: Range,
} as Meta;

export const Base: Story<RangeProps> = (args) => (
  /* L'utilisation du Range nécessite l'injection de Trilogy-Vanilla pour fonctioner :
     <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
  */
  <Range {...args} />
);
Base.args = {
  min: 0,
  max: 100,
  unit: "€",
  valueMin: 0,
  valueMax: 50,
  label: "Ceci est un label",
  onChangeMin: (e) => console.log(e),
  gap: 0,
};
