import * as React from "react";

import { Meta, Story } from "@storybook/react";
import { SpacerProps } from "./SpacerProps";
import Spacer from "./Spacer";
import { SpacerSize } from "./SpacerEnum";
import { Button, ButtonVariant } from '../button'

const spacerSizeOptions = [
  SpacerSize.ZERO,
  SpacerSize.ONE,
  SpacerSize.TWO,
  SpacerSize.THREE,
  SpacerSize.FOUR,
  SpacerSize.FIVE,
  SpacerSize.SIX,
  SpacerSize.SEVEN,
  SpacerSize.EIGHT,
  SpacerSize.NINE,
  SpacerSize.TEN,
];

export default {
  title: "Components/Spacer",
  component: Spacer,
  argTypes: {
    // ...autres propriétés...
    size: {
      control: {
        type: "select",
        options: spacerSizeOptions, // Remplacez MyEnum par votre propre enum
      },
    },
  },
} as Meta;

export const Base: Story<SpacerProps> = (args) => {
  const { size, ...otherProps } = args;

  return (
    <>
      <Button variant={ButtonVariant.PRIMARY}>
        Play with the props <code>size</code>
      </Button>
      <Spacer {...otherProps} size={size} />
      <Button>Dans le pannel de contrôle ⬇</Button>
    </>
  );
};
