import * as React from "react";

import { Meta, Story } from "@storybook/react";

import { Stepper, Step } from "./index";
import { StepperProps } from "./StepperProps";
import { IconName } from "../icon";

export default {
  title: "Components/Stepper",
  component: Stepper,
  subcomponents: { StepperStep: Step },
} as Meta;

export const Base: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <Step done label="Récapitulatif" step={1} />
    <Step done label="Compléments" step={2} />
    <Step done label="Coordonnées" step={3} />
    <Step current label="Livraison" step={4} />
    <Step label="Confirmation" step={5} />
  </Stepper>
);

export const EtapeEnCours: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <Step label={"is-current"} step={1} current />
    <Step label="Compléments" step={2} />
  </Stepper>
);

export const EtapeTerminee: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <Step label={"is-done"} step={1} done />
    <Step done label="is-done" step={2} />
  </Stepper>
);

export const EtapeEnErreur: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <Step label={"is-error"} error step={1} />
  </Stepper>
);

export const EtapeAvecIcone: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <Step
      label={"Paiement"}
      current
      step={1}
      iconName={IconName.CREDIT_CARD}
    />
    <Step label={"Livraison"} step={2} iconName={IconName.TRAIN} />
    <Step
      label={"Confirmation"}
      step={2}
      iconName={IconName.BOX_CHECK}
    />
  </Stepper>
);

export const Etape: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <Step label={"step 1"} step={1} />
    <Step label={"step 2"} step={1} />
    <Step label={"step 3"} step={1} />
  </Stepper>
);
