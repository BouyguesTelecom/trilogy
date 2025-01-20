import * as React from "react";

import { Meta, Story } from "@storybook/react";
import { Progress } from "./index";
import { ProgressProps } from "./ProgressProps";
import { StatusState } from "../../objects";

export default {
  title: "Components/ProgressBar",
  component: Progress,
} as Meta;

export const Base: Story<ProgressProps> = (args) => (
  /* L'utilisation de la progress bar Circulaire nécessite l'injection de Trilogy-Vanilla pour fonctioner :
 <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/
  <>
    <Progress {...args} />
    <Progress value={20} status={StatusState.INFO} />
    <Progress value={40} status={StatusState.WARNING} />
    <Progress value={60} status={StatusState.ERROR} />
    <Progress value={80} status={StatusState.SUCCESS} />
  </>
);
Base.args = {
  value: 10,
};

export const AvecLégende: Story<ProgressProps> = (args) => (
  <>
    <Progress {...args} />
    <Progress
      value={15}
      status={StatusState.INFO}
      legendStart="0 Go"
      legendEnd="5 Go"
    />
  </>
);
AvecLégende.args = {
  value: 30,
  status: StatusState.INFO,
  legendCenter: "My unique legend",
};

export const Petite: Story<ProgressProps> = (args) => <Progress {...args} />;
Petite.args = {
  value: 30,
  status: StatusState.INFO,
  small: true,
};
