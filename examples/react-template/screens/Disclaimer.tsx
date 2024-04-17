import * as React from "react";
import {
  Section,
  Title,
  TitleLevels,
  Divider,
  Disclaimer,
  DisclaimerItem,
} from "@trilogy-ds/react/components";

export const DisclaimerScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Legal Notice</Title>
      <Divider />
      <Disclaimer title="Messaging Information">
        <DisclaimerItem>Disclaimer Item 1</DisclaimerItem>
        <DisclaimerItem>Disclaimer Item 2</DisclaimerItem>
        <DisclaimerItem>Disclaimer Item 3</DisclaimerItem>
      </Disclaimer>
    </Section>
  );
};
