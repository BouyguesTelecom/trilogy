import * as React from "react";

import { Meta, Story } from "@storybook/react";

import { Stepper, Step } from "./index";
import { StepperProps } from "./StepperProps";
import { IconName } from "../icon";

export default {
  title: "Components/Stepper",
  component: Stepper,
  subcomponents: { Step },
} as Meta;

export const Base: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <Step done label="Récapitulatif" />
    <Step done label="Compléments"  />
    <Step done label="Coordonnées"  />
    <Step current label="Livraison"/>
    <Step label="Confirmation" />
  </Stepper>
);

export const EtapeEnCours: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <Step label="is-current" current />
    <Step label="Compléments"  />
  </Stepper>
);

export const EtapeTerminee: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <Step label={"is-done"} done />
    <Step done label="is-done" />
  </Stepper>
);

export const EtapeEnErreur: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <Step label={"is-error"} error />
  </Stepper>
);

export const EtapeAvecIcone: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <Step
      label={"Paiement"}
      current
      iconName={IconName.BELL}
    />
    <Step label={"Livraison"} iconName={IconName.INFOS_CIRCLE} />
    <Step
      label={"Confirmation"}
      iconName={IconName.CHECK}
    />
  </Stepper>
);

export const Etape: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <Step label={"step 1"} />
    <Step label={"step 2"} />
    <Step label={"step 3"} />
  </Stepper>
);
