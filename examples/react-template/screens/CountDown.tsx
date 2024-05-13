import * as React from "react";
import {
  Countdown,
  CountdownFormat,
  Section,
  Spacer,
  SpacerSize,
} from "@trilogy-ds/react/components";

export const CountdownScreen = (): JSX.Element => {
  return (
    <Section>
      <Countdown deadline={new Date("2023-12-24 18:00:00")}></Countdown>
      <Spacer size={SpacerSize.MEDIUM} />
      <Countdown
        small
        deadline={new Date("2024-09-28 18:00:00")}
        format={CountdownFormat.DAY_HOUR_MIN}
      ></Countdown>
    </Section>
  );
};
