import * as React from "react";

import { Meta, Story } from "@storybook/react";
import Otp from "./Otp";
import { OtpProps } from "./OtpProps";

export default {
  title: "Components/Otp",
  component: Otp,
} as Meta;

export const Base: Story<OtpProps> = (args) => <Otp {...args} />;
Base.args = {
  onChange: (code) => console.log(code),
  onCompleted: (code) => console.log(code),
  label: "Saisir votre otp",
};
export const EnErreur: Story<OtpProps> = (args) => <Otp {...args} />;
EnErreur.args = {
  error: true,
  errorMessage: "Ceci est un message  derreur",
  onChange: (code) => console.log(code),
  onCompleted: (code) => console.log(code),
  label: "Saisir votre otp",
};
export const Disabled: Story<OtpProps> = (args) => <Otp {...args} />;
Disabled.args = {
  disabled: true,
  onChange: (code) => console.log(code),
  onCompleted: (code) => console.log(code),
  label: "Saisir votre otp",
};

export const CodeSize: Story<OtpProps> = (args) => <Otp {...args} />;
CodeSize.args = {
  codeSize: 3,
  onChange: (code) => console.log(code),
  onCompleted: (code) => console.log(code),
  label: "Saisir votre otp",
};
