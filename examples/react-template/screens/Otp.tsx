import * as React from "react";
import {
  Section,
  Title,
  TitleLevels,
  Otp,
  Spacer,
  SpacerSize,
} from "@trilogy-ds/react/components";

export const OtpScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>OTP</Title>
      <Otp
        onChange={(code) => console.log("onChange", code)}
        onCompleted={(code) => console.log("onCompleted", code)}
        label="Set your OTP"
        autoFocus
      />
      <Spacer size={SpacerSize.HUGE} />

      <Otp
        disabled
        onChange={(code) => console.log("onChange", code)}
        onCompleted={(code) => console.log("onCompleted", code)}
        label="OTP Disabled"
      />
      <Spacer size={SpacerSize.HUGE} />
      <Otp
        error
        errorMessage={"This is an error message"}
        onChange={(code) => console.log("onChange", code)}
        onCompleted={(code) => console.log("onCompleted", code)}
        label="OTP Error"
      />
      <Spacer size={SpacerSize.HUGE} />

      <Otp
        errorMessage={"This is a message"}
        codeSize={4}
        onChange={(code) => console.log("onChange", code)}
        onCompleted={(code) => console.log("onCompleted", code)}
        label="OTP Error"
      />
    </Section>
  );
};
