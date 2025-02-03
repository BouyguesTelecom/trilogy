import * as React from "react";

import { Meta, Story } from "@storybook/react";
import Price from "./Price";
import { PriceProps } from "./PriceProps";
import { PriceLevel } from "./PriceEnum";
import { Alignable } from "../../objects";

export default {
  title: "Components/Price",
  component: Price,
} as Meta;

export const Base: Story<PriceProps> = (args) => <Price {...args} />;
Base.args = {
  level: PriceLevel.ONE,
  amount: 24.99,
  mention: "(1)",
  period: "mois",
};
export const Inverted: Story<PriceProps> = (args) => (
  <div style={{ backgroundColor: "#25465f", padding: 10 }}>
    <Price {...args} />
  </div>
);
Inverted.args = {
  amount: 24.99,
  mention: "(1)",
  period: "mois",
};
export const Barré: Story<PriceProps> = (args) => <Price {...args} />;
Barré.args = {
  oldAmount: 28.99,
  amount: 24.99,
  mention: "(1)",
  period: "mois",
};

export const Alignement: Story<PriceProps> = (args) => <Price {...args} />;
Alignement.args = {
  amount: 24.99,
  period: "mois",
  align: Alignable.ALIGNED_CENTER,
};

export const Surtitre: Story<PriceProps> = (args) => <Price {...args} />;
Surtitre.args = {
  overline: "à partir de",
  amount: 24.99,
  period: "mois",
};

export const AvecExposant: Story<PriceProps> = (args) => <Price {...args} />;
AvecExposant.args = {
  mention: "(1)",
  amount: 24.99,
  period: "mois",
};
