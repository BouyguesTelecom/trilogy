import * as React from "react";

import { Meta, Story } from "@storybook/react";
import Countdown from "./Countdown";
import { CountdownProps } from "./CountdownProps";
import { CountdownFormat } from "./CountdownEnum";

export default {
  title: "Components/Countdown",
  component: Countdown,
} as Meta;

export const Base: Story<CountdownProps> = (args) => (
  /* L'utilisation du countdown nécessite l'injection de Trilogy-Vanilla pour fonctioner :
   <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/
  <Countdown {...args}></Countdown>
);
Base.args = {
  deadline: new Date("2023-12-24 18:00:00"),
};

export const Small: Story<CountdownProps> = (args) => (
  <Countdown {...args}></Countdown>
);
Small.args = {
  deadline: new Date("2023-12-24 18:00:00"),
  small: true,
};

export const Format: Story<CountdownProps> = (args) => (
  <Countdown {...args}></Countdown>
);
Format.args = {
  deadline: new Date("2023-12-24 18:00:00"),
  format: CountdownFormat.DAY,
};
