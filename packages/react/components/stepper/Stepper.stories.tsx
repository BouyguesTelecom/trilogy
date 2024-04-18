import * as React from "react";

import { Meta, Story } from "@storybook/react";

import { Stepper, StepperStep } from "./index";
import { StepperProps } from "./StepperProps";
import { IconName } from "../icon";

export default {
  title: "Components/Stepper",
  component: Stepper,
  subcomponents: { StepperStep },
} as Meta;

export const Base: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <StepperStep done label="Récapitulatif" step={1} />
    <StepperStep done label="Compléments" step={2} />
    <StepperStep done label="Coordonnées" step={3} />
    <StepperStep current label="Livraison" step={4} />
    <StepperStep label="Confirmation" step={5} />
  </Stepper>
);

export const EtapeEnCours: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <StepperStep label={"is-current"} step={1} current />
    <StepperStep label="Compléments" step={2} />
  </Stepper>
);

export const EtapeTerminee: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <StepperStep label={"is-done"} step={1} done />
    <StepperStep done label="is-done" step={2} />
  </Stepper>
);

export const EtapeEnErreur: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <StepperStep label={"is-error"} error step={1} />
  </Stepper>
);

export const EtapeAvecIcone: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <StepperStep
      label={"Paiement"}
      current
      step={1}
      iconName={IconName.CREDIT_CARD}
    />
    <StepperStep label={"Livraison"} step={2} iconName={IconName.TRAIN} />
    <StepperStep
      label={"Confirmation"}
      step={2}
      iconName={IconName.BOX_CHECK}
    />
  </Stepper>
);

export const Etape: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    <StepperStep label={"step 1"} step={1} />
    <StepperStep label={"step 2"} step={1} />
    <StepperStep label={"step 3"} step={1} />
  </Stepper>
);
