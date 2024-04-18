import * as React from "react";
import {
  Divider,
  IconName,
  Options,
  OptionsItem,
  OptionsItemVariant,
  Section,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";

export const OptionsScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Options</Title>
      <Divider />

      <Options>
        <OptionsItem
          disabled
          label="50 Go"
          name="option"
          value="50go"
          variant={OptionsItemVariant.MULTILINE}
          iconName={IconName.TIMES}
          description="Adipisicing deserunt nulla incididunt aliqua sunt."
          // eslint-disable-next-line no-console
          readonly
          onChange={(e) => console.log(e.optionValue, e.optionChecked)}
        />
        <OptionsItem
          label="50 Go"
          name="option"
          value="50go"
          variant={OptionsItemVariant.MULTILINE}
          iconName={IconName.TIMES}
          description="Adipisicing deserunt nulla incididunt aliqua sunt."
          // eslint-disable-next-line no-console
          readonly
          onChange={(e) => console.log(e.optionValue, e.optionChecked)}
        />

        <OptionsItem
          label="100 Go"
          name="option"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.optionValue, e.optionChecked)}
          readonly
          value="100go"
        />
      </Options>
    </Section>
  );
};
