import * as React from "react";
import { Section, Switch } from "@trilogy-ds/react/components";

export const SwitchScreen = (): JSX.Element => {
  return (
    <Section>
      <Switch
        label="Switch one"
        name="switch one"
        // eslint-disable-next-line no-console
        onChange={(e) => {
          console.log("SwitchState =>", e.switchState);
          console.log("SwitchSName =>", e.switchName);
        }}
        // eslint-disable-next-line no-console
        onClick={(e) => {
          console.log("SwitchState =>", e.switchState);
          console.log("SwitchSName =>", e.switchName);
        }}
      />

      <Switch
        label="Switch two"
        name="switch"
        checked
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.switchState)}
      />
      <Switch
        disabled
        label="Switch two disabled checked"
        name="switch"
        checked
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.switchState)}
        readonly
      />
      <Switch
        disabled
        label="Switch two disabled"
        name="switch"
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.switchState)}
        readonly
      />
      <Switch
        reversed
        disabled
        label="Switch two disabled"
        name="switch"
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.switchState)}
        readonly
      />
      <Switch
        reversed
        label="Switch two disabled"
        name="switch"
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.switchState)}
        readonly
      />
      <Switch
        reversed
        disabled
        label="Switch two disabled"
        name="switch"
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.switchState)}
        readonly
        checked
      />
    </Section>
  );
};
