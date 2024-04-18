import * as React from "react";
import {
  Divider,
  IconName,
  Section,
  Textarea,
} from "@trilogy-ds/react/components";

export const TextareaScreen = (): JSX.Element => {
  return (
    <Section>
      <Textarea disabled placeholder="placeholder" label="Dynamic label" />
      <Divider />

      <Textarea
        placeholder="placeholder"
        label="No Dynamic label"
        dynamicPlaceholder={false}
      />
      <Divider />

      <Textarea
        placeholder="placeholder"
        label="With Max Lenght "
        dynamicPlaceholder={false}
        maxLength={150}
      />
      <Divider />
      <Textarea placeholder="Disabled" label="Label" disabled />

      <Textarea
        placeholder="With icon"
        label="With maxlength"
        maxLength={150}
        iconName={IconName.CHECK}
      />
      <Divider />

      <Textarea
        placeholder="With status icon success"
        label="Iam a label"
        maxLength={150}
        iconName={IconName.CHECK}
        statusIconName="tri-check-circle"
        status="success"
      />
      <Divider />

      <Textarea
        placeholder="With status icon error"
        label="Label"
        iconName={IconName.CHECK}
        statusIconName="tri-exclamation-circle"
        status="error"
        help="This is a help message"
        typo="has-text-error"
      />
    </Section>
  );
};
