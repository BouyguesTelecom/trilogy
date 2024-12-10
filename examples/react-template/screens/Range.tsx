import * as React from "react";
import { Section, Range } from "@trilogy-ds/react/components";

export const RangeScreen = (): JSX.Element => {
  return (
    <Section>
      <Range
        min={0}
        max={100}
        unit={"%"}
        valueMin={0}
        valueMax={100}
        label="Ceci est un label"
        id={"test"}
        name="name-range"
        onChangeMin={(e) => console.log(e)}
        onChangeMax={(e) => console.log(e)}
        gap={2}
      />
    </Section>
  );
};
